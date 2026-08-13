import React from "react";
import { useParams } from "react-router-dom";

const ViewDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Complaint Details
          </h1>

          <p className="mt-4 text-gray-600">Complaint ID:</p>

          <p className="font-mono text-blue-600 mt-1">{id}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
