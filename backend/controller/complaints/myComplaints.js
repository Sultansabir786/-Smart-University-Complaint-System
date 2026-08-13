import { db } from "../../config/db.js";

export const MyComplaints = async (req, res) => {
  try {
    const complaints = db.collection("complaints");

    const userComplaints = await complaints
      .find({
        userId: req.user.userId,
      })
      .sort({ createdAt: -1 })
      .toArray();

    return res.status(200).json({
      complaints: userComplaints,
    });
  } catch (error) {
    console.error("My complaints error:", error);

    return res.status(500).json({
      message: "Failed to get complaints",
    });
  }
};
