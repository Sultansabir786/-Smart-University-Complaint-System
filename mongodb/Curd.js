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
} catch (error) {
  console.error("Connection error:", error);
} finally {
  await client.close();
  console.log("Connection closed");
}

// insert one
await collection.insertOne({ name: "John", age: 30 });
//  insert many
await collection.insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
]);

// Read: find all document
await collection.find({}).toArray();
// Rad : find only one
await collection.findOne({ name: "John" });
// Read: find with filter
// Find users with age 30
await collection.find({ age: 30 }).toArray();
// Find users with age greater than 25
await collection.find({ age: { $gt: 25 } }).toArray();

// Read : find using  comparison operatioin
// $eq (equal to)
await collection.find({ age: { $eq: 30 } }).toArray();

// $ne (not equal)
await collection.find({ age: { $ne: 30 } }).toArray();

// $gt (greater than)
await collection.find({ age: { $gt: 25 } }).toArray();

// $gte (greater than or equal)
await collection.find({ age: { $gte: 25 } }).toArray();

// $lt (less than)
await collection.find({ age: { $lt: 30 } }).toArray();

// $lte (less than or equal)
await collection.find({ age: { $lte: 30 } }).toArray();

// $in (in array)
await collection.find({ age: { $in: [25, 30, 35] } }).toArray();

// $nin (not in array)
await collection.find({ age: { $nin: [25, 30] } }).toArray();

// Read: find using Logical Operatior
// $and
await collection
  .find({
    $and: [{ age: { $gt: 25 } }, { name: "John" }],
  })
  .toArray();

// $or
await collection
  .find({
    $or: [{ age: 30 }, { name: "John" }],
  })
  .toArray();

// $not
await collection.find({ age: { $not: { $eq: 30 } } }).toArray();

// $nor
await collection
  .find({
    $nor: [{ age: 30 }, { name: "John" }],
  })
  .toArray();

//   update : single operator
await collection.updateOne(
  { name: "John" }, // Filter
  { $set: { age: 31 } }, // Update
);

// update :miltuple
await collection.updateMany(
  { age: { $lt: 30 } }, // Filter
  { $set: { status: "young" } }, // Update
);
//  update : replace document
await collection.replaceOne(
  { name: "John" }, // Filter
  { name: "John", age: 31, city: "NYC" }, // New document
);

// detete :single docuemnt
await collection.deleteOne({ name: "John" });

//  delete : miltiple document
await collection.deleteMany({ age: { $lt: 18 } });
