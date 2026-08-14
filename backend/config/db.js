import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

export const db = client.db("SignUPBobby");

export const Connect_DB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Atlas is connected");
  } catch (error) {
    console.log("MongoDB is not connected:", error.message);
  }
};
