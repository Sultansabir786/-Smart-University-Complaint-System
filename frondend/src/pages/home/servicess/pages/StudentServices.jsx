import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaHandsHelping,
  FaHeartbeat,
  FaFutbol,
  FaUtensils,
  FaBed,
  FaBus,
  FaShieldAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

const StudentServices = () => {
  const studentServices = [
    {
      icon: <FaHandsHelping className="text-4xl text-yellow-500" />,
      title: "Counseling Services",
      description:
        "Professional counseling and mental health support for students.",
      details: "Confidential support available",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-yellow-500" />,
      title: "Health Services",
      description: "On-campus medical clinic and health awareness programs.",
      details: "24/7 medical support",
    },
    {
      icon: <FaFutbol className="text-4xl text-yellow-500" />,
      title: "Sports & Recreation",
      description:
        "State-of-the-art sports facilities and recreational activities.",
      details: "Cricket, football, basketball",
    },
    {
      icon: <FaUtensils className="text-4xl text-yellow-500" />,
      title: "Dining Services",
      description: "Nutritious and affordable meal options across campus.",
      details: "Multiple dining venues",
    },
    {
      icon: <FaBed className="text-4xl text-yellow-500" />,
      title: "Hostel Accommodation",
      description: "Comfortable and secure accommodation for students.",
      details: "Separate hostels for boys/girls",
    },
    {
      icon: <FaBus className="text-4xl text-yellow-500" />,
      title: "Transportation",
      description: "Safe and reliable campus transportation services.",
      details: "Shuttle service available",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      title: "Security Services",
      description: "24/7 campus security and student safety measures.",
      details: "CCTV surveillance",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
      title: "Financial Aid",
      description: "Scholarships, grants, and financial assistance programs.",
      details: "Need-based support available",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-yellow-500" />,
      title: "Student Activities",
      description: "Clubs, societies, and extracurricular activities.",
      details: "50+ student clubs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services/academic"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Academic
          </Link>
          <Link
            to="/services/administrative"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Administrative →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaUserGraduate className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Student <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Comprehensive support for student success and well-being
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {studentServices.map((service, index) => (
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

          <div className="mt-8 grid md:grid-cols-3 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">15K+</p>
              <p className="text-sm text-gray-600">Students Served</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">24/7</p>
              <p className="text-sm text-gray-600">Support Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">100%</p>
              <p className="text-sm text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentServices;
