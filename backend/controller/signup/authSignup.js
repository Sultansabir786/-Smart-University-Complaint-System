import { db } from "../../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignUP = async (req, res) => {
  const { name, email, password, phone } = req.body;
  console.log(req.body);

  if (!name || !email || !password || !phone) {
    return res.status(400).json({
      message: "all field are required",
    });
  }

  const clearName = name.trim().toLowerCase();
  const clearEmail = email.trim().toLowerCase(); // Fixed: use clearEmail consistently

  if (clearName.length < 3 || clearName.length > 50) {
    return res.status(400).json({
      message: "Name must be less than 50 and greater than 3 characters",
    });
  }

  const nameRegex = /^[a-zA-Z\s]+$/;

  if (!nameRegex.test(clearName)) {
    return res.status(400).json({
      message: "Name can contain only letters and spaces",
    });
  }

  //   const emailRegex = /^[^\s@]+@gmail\.com$/;

  if (!clearEmail.endsWith("@gmail.com")) {
    return res.status(400).json({
      message: "Email must be a valid Gmail address",
    });
  }

  if (password.length < 8 || password.length > 72) {
    return res.status(400).json({
      message: "Password must be between 8 and 72 characters",
    });
  }

  const passwordValidation =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

  if (!passwordValidation.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain uppercase, lowercase, number and special character",
    });
  }
  const user = db.collection("SignUp_user_Data");
  const existingUser = await user.findOne({ email: clearEmail });
  if (existingUser) {
    return res.status(409).json({
      message: "Email already registered. Please login.",
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const result = await user.insertOne({
      name: clearName,
      email: clearEmail,
      password: hashPassword,
      phone: phone,
    });
    console.log("User saved:", result.insertedId);

    const token = jwt.sign(
      {
        userId: result.insertedId,
        email: clearEmail,
        name: clearName,
      },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "1h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });
    // Added success response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        userId: result.insertedId,
        name: clearName,
        email: clearEmail,
      },
    });
  } catch (error) {
    console.log("Data is not saved in MongoDB:", error);
    res.status(500).json({
      message: "Failed to save data",
    });
  }
};
