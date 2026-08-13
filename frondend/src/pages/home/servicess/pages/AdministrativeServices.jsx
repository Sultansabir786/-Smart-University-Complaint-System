import React from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaFileAlt,
  FaUserCheck,
  FaClipboardList,
  FaCalendarCheck,
  FaIdCard,
  FaFileSignature,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const AdministrativeServices = () => {
  const adminServices = [
    {
      icon: <FaFileAlt className="text-4xl text-yellow-500" />,
      title: "Registration Services",
      description:
        "Course registration, transcript requests, and enrollment verification.",
      details: "Online registration available",
    },
    {
      icon: <FaUserCheck className="text-4xl text-yellow-500" />,
      title: "Student Records",
      description:
        "Secure maintenance of academic records and student information.",
      details: "Digital records system",
    },
    {
      icon: <FaClipboardList className="text-4xl text-yellow-500" />,
      title: "Examination Services",
      description: "Exam scheduling, grading, and result management.",
      details: "Transparent processes",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-yellow-500" />,
      title: "Academic Calendar",
      description: "Comprehensive academic scheduling and event management.",
      details: "Updated regularly",
    },
    {
      icon: <FaIdCard className="text-4xl text-yellow-500" />,
      title: "ID Card Services",
      description:
        "Student and staff identification card issuance and management.",
      details: "Biometric enabled",
    },
    {
      icon: <FaFileSignature className="text-4xl text-yellow-500" />,
      title: "Document Verification",
      description: "Degree verification, attestation, and official documents.",
      details: "HEC verified",
    },
    {
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "Attendance Management",
      description: "Automated attendance tracking and reporting system.",
      details: "Real-time monitoring",
    },
    {
      icon: <FaPhone className="text-4xl text-yellow-500" />,
      title: "Help Desk",
      description:
        "Centralized support for administrative inquiries and assistance.",
      details: "Quick response team",
    },
    {
      icon: <FaEnvelope className="text-4xl text-yellow-500" />,
      title: "Communication Services",
      description:
        "Official correspondence and inter-departmental communication.",
      details: "Secure channels",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services/student"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Student
          </Link>
          <Link
            to="/services/it"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: IT Services →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaBuilding className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Administrative <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Efficient and transparent administrative support
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {adminServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {service.description}
                    </p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      {service.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              📌 Administrative Excellence
            </h3>
            <p className="text-gray-700">
              The Islamia University of Bahawalpur maintains the highest
              standards of administrative efficiency, transparency, and
              student-centered service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrativeServices;
