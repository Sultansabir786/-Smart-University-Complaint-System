import React from "react";
import { Link } from "react-router-dom";
const Campus = () => {
  const facilities = [
    {
      name: "Main Library",
      icon: "📚",
      desc: "500,000+ books and digital resources",
    },
    {
      name: "Sports Complex",
      icon: "🏟️",
      desc: "Cricket, football, basketball facilities",
    },
    {
      name: "Computer Labs",
      icon: "💻",
      desc: "State-of-the-art computing facilities",
    },
    {
      name: "Research Centers",
      icon: "🔬",
      desc: "Advanced research laboratories",
    },
    {
      name: "Hostels",
      icon: "🏠",
      desc: "Separate hostels for boys and girls",
    },
    {
      name: "Cafeteria",
      icon: "🍽️",
      desc: "Multiple dining options available",
    },
    { name: "Medical Center", icon: "🏥", desc: "24/7 healthcare services" },
    {
      name: "Masjid",
      icon: "🕌",
      desc: "Prayer facilities for students and staff",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Campus</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A vibrant and modern learning environment
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  📍 Location
                </h3>
                <p className="text-gray-700">
                  The main campus is located in Bahawalpur, Punjab, Pakistan.
                  The university also has multiple campuses and teaching sites
                  across the region to serve the educational needs of Southern
                  Punjab.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700">📏 Area</p>
                    <p className="text-gray-600">500+ Acres</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">🏛️ Buildings</p>
                    <p className="text-gray-600">50+ Academic Buildings</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🌳 Environment
                </h3>
                <p className="text-gray-700">
                  Green and eco-friendly campus with beautiful gardens, walking
                  tracks, and a serene learning environment.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
              Campus Facilities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-yellow-50 transition p-4 rounded-xl text-center"
                >
                  <div className="text-3xl mb-2">{facility.icon}</div>
                  <h4 className="font-bold text-gray-800">{facility.name}</h4>
                  <p className="text-sm text-gray-600">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;
