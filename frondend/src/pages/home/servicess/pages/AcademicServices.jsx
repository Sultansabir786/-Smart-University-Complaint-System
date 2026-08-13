import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
  FaMicroscope,
  FaGlobe,
  FaAward,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const AcademicServices = () => {
  const academicServices = [
    {
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
      title: "Undergraduate Programs",
      description:
        "Bachelor's degree programs across multiple disciplines including Arts, Sciences, Engineering, and Law.",
      details: "Over 50 programs available",
    },
    {
      icon: <FaBookOpen className="text-4xl text-yellow-500" />,
      title: "Graduate Programs",
      description:
        "Master's and doctoral programs with focus on research, innovation, and advanced knowledge.",
      details: "MS, MPhil, and PhD programs",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
      title: "Faculty Excellence",
      description:
        "Highly qualified faculty with international experience and research expertise.",
      details: "80% PhD qualified faculty",
    },
    {
      icon: <FaMicroscope className="text-4xl text-yellow-500" />,
      title: "Research Centers",
      description:
        "State-of-the-art research centers focused on solving real-world problems.",
      details: "15 specialized research centers",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500" />,
      title: "International Programs",
      description:
        "International collaborations, student exchange, and global learning opportunities.",
      details: "50+ international partners",
    },
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "Accreditation & Quality",
      description:
        "HEC accredited programs with continuous quality assurance and improvement.",
      details: "Internationally recognized",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Student Support",
      description:
        "Academic advising, tutoring, and support services for student success.",
      details: "24/7 support available",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-yellow-500" />,
      title: "Digital Learning",
      description:
        "Advanced learning management systems and online educational resources.",
      details: "Hybrid learning options",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Services
          </Link>
          <Link
            to="/services/student"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Student Services →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaGraduationCap className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Academic <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Excellence in education, research, and innovation
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {academicServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
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
              📌 Academic Excellence
            </h3>
            <p className="text-gray-700">
              The Islamia University of Bahawalpur is committed to providing
              world-class academic services that prepare students for successful
              careers and meaningful contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicServices;
