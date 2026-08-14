import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getMyComplaints = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/complaints/my`,
        {
          method: "GET",
          credentials: "include",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to get complaints");
        return;
      }

      setComplaints(data.complaints);
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyComplaints();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white px-8 py-6 rounded-2xl shadow-md">
          <p className="text-gray-600 text-lg font-medium">
            Loading complaints...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-5 rounded-2xl shadow-sm">
          <p className="font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  // No complaints
  if (complaints.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">📋</div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Complaints Found
          </h2>

          <p className="text-gray-500">
            You have not submitted any complaints yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Complaints
          </h1>

          <p className="text-gray-500 mt-2">
            View and track all the complaints you have submitted.
          </p>
        </div>

        {/* Complaint Count */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Complaints</p>

              <p className="text-3xl font-bold text-gray-800 mt-1">
                {complaints.length}
              </p>
            </div>

            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
              📋
            </div>
          </div>
        </div>

        {/* Complaints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complaints.map((complaint) => (
            <div
              key={complaint._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top section */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">
                    Complaint
                  </p>

                  <h2 className="text-xl font-bold text-gray-800">
                    {complaint.title}
                  </h2>
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap
                    ${
                      complaint.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : complaint.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : complaint.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  {complaint.status}
                </span>
              </div>

              {/* Complaint Information */}
              <div className="space-y-3 border-t border-gray-100 pt-5">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Category</span>

                  <span className="text-sm font-medium text-gray-800 text-right">
                    {complaint.category}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Department</span>

                  <span className="text-sm font-medium text-gray-800 text-right">
                    {complaint.department}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-gray-500">Location</span>

                  <span className="text-sm font-medium text-gray-800 text-right">
                    {complaint.location || "Not provided"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Description
                </p>

                <p className="text-sm text-gray-600 leading-6">
                  {complaint.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  ID: {complaint._id}
                </span>

                <Link
                  to={`/dashboard/complaint/${complaint._id}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComplaints;
