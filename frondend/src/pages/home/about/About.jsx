// About.jsx
import React from "react";
import { FaUsers, FaRocket, FaShieldAlt, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn more about who we are and what we stand for.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Values Grid */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-green-600 mb-4 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Community</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building strong connections.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaRocket />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Innovation</h3>
            <p className="text-gray-600 text-sm mt-2">
              Pushing boundaries forward.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-yellow-600 mb-4 flex justify-center">
              <FaShieldAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Trust</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reliable and transparent.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl text-red-600 mb-4 flex justify-center">
              <FaHandshake />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Integrity</h3>
            <p className="text-gray-600 text-sm mt-2">Doing the right thing.</p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              👤
            </div>
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-500 text-sm">CEO & Founder</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              👩
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-500 text-sm">CTO</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              👨
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Mike Johnson
            </h3>
            <p className="text-gray-500 text-sm">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
