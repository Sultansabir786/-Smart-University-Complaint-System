import express from "express";
import route from "./routes/router.js";
import { Connect_DB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", route);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({
    message: "Server is running!",
  });
});

Connect_DB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
