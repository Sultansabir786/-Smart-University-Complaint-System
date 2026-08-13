import React from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUserTie,
  FaFileAlt,
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaClipboardList,
  FaChartLine,
  FaRocket,
  FaGlobe,
  FaBuilding,
  FaTrophy,
} from "react-icons/fa";

const CareerServices = () => {
  const careerServices = [
    {
      icon: <FaUserTie className="text-4xl text-yellow-500" />,
      title: "Career Counseling",
      description: "Professional guidance and career planning services.",
      details: "One-on-one sessions",
    },
    {
      icon: <FaFileAlt className="text-4xl text-yellow-500" />,
      title: "Resume & Cover Letter",
      description:
        "Expert assistance in creating professional resumes and cover letters.",
      details: "Industry standard",
    },
    {
      icon: <FaHandshake className="text-4xl text-yellow-500" />,
      title: "Interview Preparation",
      description: "Mock interviews and interview skills training.",
      details: "Practice sessions",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Job Placement",
      description: "Connecting students with employers and job opportunities.",
      details: "500+ employers",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
      title: "Internship Programs",
      description: "Internship opportunities with leading organizations.",
      details: "Paid internships",
    },
    {
      icon: <FaClipboardList className="text-4xl text-yellow-500" />,
      title: "Skill Development",
      description: "Workshops and training programs for professional skills.",
      details: "Soft skills training",
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-500" />,
      title: "Career Fairs",
      description: "Regular career fairs and networking events.",
      details: "Twice a year",
    },
    {
      icon: <FaRocket className="text-4xl text-yellow-500" />,
      title: "Entrepreneurship",
      description:
        "Support for startup ventures and entrepreneurial initiatives.",
      details: "Incubation support",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500" />,
      title: "International Careers",
      description: "Guidance for international career opportunities.",
      details: "Global network",
    },
    {
      icon: <FaBuilding className="text-4xl text-yellow-500" />,
      title: "Corporate Partnerships",
      description:
        "Strong partnerships with leading companies and organizations.",
      details: "Industry connections",
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "Awards & Recognition",
      description: "Recognizing student achievements and career excellence.",
      details: "Annual awards",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services/library"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Library
          </Link>
          <Link
            to="/services"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Back to Services
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaBriefcase className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Career <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Building successful careers through comprehensive support
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {careerServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {service.description}
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                  {service.details}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">95%</p>
              <p className="text-sm text-gray-600">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">500+</p>
              <p className="text-sm text-gray-600">Employers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">1000+</p>
              <p className="text-sm text-gray-600">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">50+</p>
              <p className="text-sm text-gray-600">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerServices;
