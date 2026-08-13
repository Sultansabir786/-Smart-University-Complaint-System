import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../../config/db.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password is requird",
    });
  }

  const clearEmail = email.trim().toLowerCase();

  if (!clearEmail.endsWith("@gmail.com")) {
    return res.status(400).json({
      message: "Email must be a valid Gmail address",
    });
  }
  const user = db.collection("SignUp_user_Data");
  const existEmail = await user.findOne({ email: clearEmail });
  if (!existEmail) {
    return res.status(401).json({
      message: "Invalid Email is and password",
    });
  }

  try {
    const isMatch = await bcrypt.compare(password, existEmail.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email and password is",
      });
    }
    // ✅ Generate JWT token
    const token = jwt.sign(
      {
        userId: existEmail._id,
        email: existEmail.email,
        name: existEmail.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: existEmail._id,
        name: existEmail.name,
        email: existEmail.email,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
