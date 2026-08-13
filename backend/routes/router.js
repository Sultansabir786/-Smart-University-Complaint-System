import express from "express";
import { SignUP } from "../controller/signup/authSignup.js";
import { Login } from "../controller/login/authLogin.js";
import { Complaint } from "../controller/complaints/authComplaint.js";
import upload from "../middleware/upload.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getMe } from "../controller/auth/authMe.js";
import { MyComplaints } from "../controller/complaints/myComplaints.js";
import { logout } from "../controller/auth/Logout.js";

const route = express.Router();

route.post("/signup", SignUP);
route.post("/login", Login);
route.post("/complaints", authMiddleware, upload.single("file"), Complaint);
route.get("/auth/me", authMiddleware, getMe);
route.get("/complaints/my", authMiddleware, MyComplaints);
route.post("/logout", logout);
export default route;
