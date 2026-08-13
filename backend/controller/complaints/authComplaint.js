import { db } from "../../config/db.js";

export const Complaint = async (req, res) => {
  try {
    const { title, category, department, against, location, description } =
      req.body;

    const file = req.file;

    // Validate required fields
    if (!title || !category || !department || !against || !description) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    // File information
    let fileData = null;

    if (file) {
      fileData = {
        filename: file.filename,
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        path: file.path,
      };
    }

    // Complaint data
    const complaintData = {
      userId: req.user.userId,

      title: title.trim(),
      category,
      department,
      against,
      location: location || "",
      description: description.trim(),

      file: fileData,

      status: "pending",

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Get complaints collection
    const complaints = db.collection("complaints");

    // Insert complaint into MongoDB
    const result = await complaints.insertOne(complaintData);

    console.log("Complaint saved successfully");
    console.log("Complaint ID:", result.insertedId);

    return res.status(201).json({
      message: "Complaint submitted successfully",

      complaint: {
        userId: req.user.userId,

        id: result.insertedId,
        title: complaintData.title,
        category: complaintData.category,
        department: complaintData.department,
        against: complaintData.against,
        location: complaintData.location,
        description: complaintData.description,
        file: fileData,
        status: complaintData.status,
      },
    });
  } catch (error) {
    console.error("Complaint save error:", error);

    return res.status(500).json({
      message: "Failed to save complaint",
    });
  }
};
