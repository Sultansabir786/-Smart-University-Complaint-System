import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017");

export const db = client.db("SignUP_bobby");

export const Connect_DB = async () => {
  try {
    await client.connect();
    console.log("Mongo is connected");
  } catch (error) {
    console.log("Mongo db is not connected", error.message);
  }
};
