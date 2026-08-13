import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookie
    const token = req.cookies.token;
    console.log("🔥 AUTH MIDDLEWARE RUNNING");

    // Check token exists
    if (!token) {
      console.log("token is not fond RUNNING");

      return res.status(401).json({
        message: "Authentication required. Please login.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store decoded user information
    req.user = decoded;

    // Continue to controller
    next();
  } catch (error) {
    console.error("Auth error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token. Please login again.",
    });
  }
};
