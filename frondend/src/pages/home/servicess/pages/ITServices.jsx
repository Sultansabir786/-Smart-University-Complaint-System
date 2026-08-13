import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaWifi,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaDesktop,
  FaMobileAlt,
  FaServer,
  FaNetworkWired,
  FaPrint,
  FaHeadset,
} from "react-icons/fa";

const ITServices = () => {
  const itServices = [
    {
      icon: <FaWifi className="text-4xl text-yellow-500" />,
      title: "High-Speed Internet",
      description: "Campus-wide high-speed WiFi connectivity.",
      details: "100% coverage",
    },
    {
      icon: <FaCloud className="text-4xl text-yellow-500" />,
      title: "Cloud Services",
      description:
        "Cloud storage and collaborative platforms for students and faculty.",
      details: "Secure cloud access",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      title: "Cybersecurity",
      description:
        "Advanced security measures to protect university data and privacy.",
      details: "24/7 monitoring",
    },
    {
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      title: "Data Management",
      description: "Centralized data storage and management systems.",
      details: "Backup & recovery",
    },
    {
      icon: <FaDesktop className="text-4xl text-yellow-500" />,
      title: "Computer Labs",
      description: "State-of-the-art computer labs with modern software.",
      details: "Open 24/7",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
      title: "Mobile Services",
      description: "Mobile applications and services for campus community.",
      details: "iOS & Android",
    },
    {
      icon: <FaServer className="text-4xl text-yellow-500" />,
      title: "Server Infrastructure",
      description:
        "High-performance servers for academic and research computing.",
      details: "Cloud integrated",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-yellow-500" />,
      title: "Network Services",
      description: "Wired and wireless network infrastructure across campus.",
      details: "Gigabit speed",
    },
    {
      icon: <FaPrint className="text-4xl text-yellow-500" />,
      title: "Printing Services",
      description: "Printing, scanning, and copying services for students.",
      details: "Affordable rates",
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-500" />,
      title: "IT Support",
      description: "Professional technical support and problem resolution.",
      details: "Quick response",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/services/administrative"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Administrative
          </Link>
          <Link
            to="/services/library"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Library Services →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaLaptop className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                IT <span className="text-yellow-600">Services</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Technology infrastructure and digital services
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {itServices.map((service, index) => (
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

          <div className="mt-8 grid md:grid-cols-4 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">100%</p>
              <p className="text-sm text-gray-600">WiFi Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">24/7</p>
              <p className="text-sm text-gray-600">IT Support</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">1 Gbps</p>
              <p className="text-sm text-gray-600">Internet Speed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">50+</p>
              <p className="text-sm text-gray-600">Software Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;
