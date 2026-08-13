import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaUserPlus,
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaComment,
  FaExclamationTriangle,
  FaHandsHelping,
  FaEnvelope,
} from "react-icons/fa";

const ComplaintProcessPage = () => {
  const steps = [
    {
      step: 1,
      icon: <FaUserPlus className="text-4xl text-yellow-500" />,
      title: "Login to the System",
      description:
        "Access the complaint management system using your university credentials. New users need to sign up first.",
      details: "Use your student/faculty ID",
    },
    {
      step: 2,
      icon: <FaFileAlt className="text-4xl text-yellow-500" />,
      title: "Submit Complaint",
      description:
        "Fill out the complaint form with complete details. Select the appropriate category and provide a detailed description.",
      details: "Add supporting documents if needed",
    },
    {
      step: 3,
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "Review & Acknowledgment",
      description:
        "Your complaint will be reviewed by the concerned department. You will receive an acknowledgment with a tracking number.",
      details: "Track status online",
    },
    {
      step: 4,
      icon: <FaCheckCircle className="text-4xl text-yellow-500" />,
      title: "Resolution & Follow-up",
      description:
        "The concerned department will investigate and work towards resolving your complaint. You will be notified of the outcome.",
      details: "Response within 7 days",
    },
  ];

  const tips = [
    {
      icon: <FaComment className="text-3xl text-yellow-500" />,
      title: "Be Clear and Concise",
      description:
        "Clearly describe the issue you are facing. Include dates, locations, and any relevant details.",
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-yellow-500" />,
      title: "Provide Evidence",
      description:
        "Upload supporting documents, screenshots, or evidence to support your complaint.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-500" />,
      title: "Stay Polite",
      description:
        "Maintain a respectful tone while describing your issue. This helps in faster resolution.",
    },
    {
      icon: <FaEnvelope className="text-3xl text-yellow-500" />,
      title: "Follow Up",
      description:
        "Keep track of your complaint. If needed, follow up with the concerned department.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/help/guidelines"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Guidelines
          </Link>
          <Link
            to="/help/documents"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Required Documents →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaClipboardList className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Complaint <span className="text-yellow-600">Process</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Step-by-step guide to filing and tracking complaints
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 mt-8">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="text-4xl flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      {step.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 Tips for Filing a Complaint
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 p-4 rounded-xl flex items-start gap-3"
                >
                  <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              📌 Important Information
            </h3>
            <p className="text-gray-700">
              Complaints are usually resolved within 7 working days. You will
              receive updates via email and SMS. For urgent complaints, contact
              the Help Desk at ext. 1234.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintProcessPage;
