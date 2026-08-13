import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaBookOpen,
  FaSearch,
  FaDatabase,
  FaLaptop,
  FaMicroscope,
  FaNewspaper,
  FaGlobe,
  FaArchive,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const LibraryServices = () => {
  const libraryServices = [
    {
      icon: <FaBookOpen className="text-4xl text-yellow-500" />,
      title: "Book Collection",
      description:
        "Extensive collection of books covering all academic disciplines.",
      details: "500K+ books available",
    },
    {
      icon: <FaSearch className="text-4xl text-yellow-500" />,
      title: "Research Databases",
      description: "Access to international research databases and journals.",
      details: "50+ databases",
    },
    {
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      title: "Digital Resources",
      description: "E-books, e-journals, and digital learning materials.",
      details: "24/7 access",
    },
    {
      icon: <FaLaptop className="text-4xl text-yellow-500" />,
      title: "Study Spaces",
      description: "Quiet study areas, group study rooms, and computer labs.",
      details: "500+ seats available",
    },
    {
      icon: <FaMicroscope className="text-4xl text-yellow-500" />,
      title: "Research Support",
      description:
        "Research assistance, citation services, and literature review support.",
      details: "Expert librarians",
    },
    {
      icon: <FaNewspaper className="text-4xl text-yellow-500" />,
      title: "Periodicals",
      description: "Current journals, magazines, and newspaper collections.",
      details: "Updated regularly",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500" />,
      title: "International Access",
      description: "Access to international library networks and resources.",
      details: "Worldwide access",
    },
    {
      icon: <FaArchive className="text-4xl text-yellow-500" />,
      title: "Special Collections",
      description: "Rare books, manuscripts, and university archives.",
      details: "Preserved collections",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Workshops & Training",
      description: "Information literacy and research skills workshops.",
      details: "Weekly sessions",
    },
    {
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "Extended Hours",
      description: "Library open extended hours during exam periods.",
      details: "24/7 access",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services/it"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to IT Services
          </Link>
          <Link
            to="/services/career"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Career Services →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaBook className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Library <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Your gateway to knowledge and research
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {libraryServices.map((service, index) => (
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

          <div className="mt-8 grid md:grid-cols-3 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">500K+</p>
              <p className="text-sm text-gray-600">Books Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">50+</p>
              <p className="text-sm text-gray-600">Research Databases</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">24/7</p>
              <p className="text-sm text-gray-600">Digital Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryServices;
