import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

try {
  await client.connect();
  console.log("Connected to MongoDB successfully!");

  const db = client.db("mongo_nodedb");
  const userCollection = db.collection("sultanFirst");

  const result = await userCollection.insertMany([
    {
      name: "sultan",
      age: 35,
    },
    {
      name: "shaka",
      age: 100,
    },
    {
      name: "kaka",
      age: 30,
    },
    {
      name: "sha",
      age: 40,
    },
  ]);
  console.log("Document inserted successfully:", result);

  const delone = await userCollection.deleteOne({ name: "sha" });
  console.log("Document find successfully:", delone);
} catch (error) {
  console.error("Connection error:", error);
} finally {
  await client.close();
  console.log("Connection closed");
}
