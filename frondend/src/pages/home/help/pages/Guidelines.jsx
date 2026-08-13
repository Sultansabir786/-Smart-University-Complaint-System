import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaShieldAlt,
  FaUserCheck,
  FaBook,
  FaGraduationCap,
  FaBuilding,
  FaUsers,
  FaClipboardList,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const Guidelines = () => {
  const guidelines = [
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      title: "Code of Conduct",
      description:
        "All students must adhere to the university code of conduct that promotes respect, integrity, and academic honesty.",
      details: "Violations may result in disciplinary action",
    },
    {
      icon: <FaUserCheck className="text-4xl text-yellow-500" />,
      title: "Academic Integrity",
      description:
        "Students are expected to maintain academic integrity by avoiding plagiarism, cheating, and other forms of academic dishonesty.",
      details: "See academic policy for details",
    },
    {
      icon: <FaBook className="text-4xl text-yellow-500" />,
      title: "Attendance Policy",
      description:
        "Regular attendance is mandatory. Students must maintain at least 75% attendance in all courses to be eligible for examinations.",
      details: "Attendance monitored electronically",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
      title: "Examination Guidelines",
      description:
        "Students must follow all examination rules including arriving on time, carrying valid ID, and adhering to exam hall regulations.",
      details: "Check exam schedule regularly",
    },
    {
      icon: <FaBuilding className="text-4xl text-yellow-500" />,
      title: "Campus Safety",
      description:
        "All students must wear ID cards on campus. Follow safety protocols, emergency procedures, and report any security concerns.",
      details: "24/7 security available",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Hostel Guidelines",
      description:
        "Hostel residents must follow all rules including curfew timings, noise control, and maintaining cleanliness in common areas.",
      details: "Security deposit required",
    },
    {
      icon: <FaClipboardList className="text-4xl text-yellow-500" />,
      title: "Complaint Procedure",
      description:
        "Follow the proper complaint filing procedure through the complaint management system for efficient resolution.",
      details: "Track complaints online",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-yellow-500" />,
      title: "Document Submission",
      description:
        "All documents must be submitted in the required format with proper attestation and verification.",
      details: "See checklist for details",
    },
    {
      icon: <FaExclamationTriangle className="text-4xl text-yellow-500" />,
      title: "Emergency Procedures",
      description:
        "Familiarize yourself with emergency evacuation routes, fire safety protocols, and first aid procedures.",
      details: "Emergency drills conducted regularly",
    },
    {
      icon: <FaInfoCircle className="text-4xl text-yellow-500" />,
      title: "IT Usage Policy",
      description:
        "Students must use university IT resources responsibly. Do not engage in unauthorized activities or share passwords.",
      details: "Usage monitored",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/help/faq"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to FAQ
          </Link>
          <Link
            to="/help/process"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Complaint Process →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaFileAlt className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Guidelines & <span className="text-yellow-600">Policies</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Important guidelines for students, faculty, and staff
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{guideline.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {guideline.description}
                    </p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      {guideline.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              📌 Important Note
            </h3>
            <p className="text-gray-700">
              All guidelines are subject to change. Please check the official
              university website or contact the administration for the most
              up-to-date information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
