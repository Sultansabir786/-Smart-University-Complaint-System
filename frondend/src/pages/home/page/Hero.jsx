import React from "react";
import { FaCubesStacked } from "react-icons/fa6";
import iubv from "../../../assets/iubv.mp4";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-[90vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={iubv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            The Islamia University of Bahawalpur
          </h1>

          <p className="mt-5 text-2xl text-green-300">
            Complaint Management System
          </p>

          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            A transparent platform for students, teachers, and staff to submit,
            track, and manage complaints efficiently.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-5">
            <Link
              to="/dashboard/ComplaintForm"
              className="bg-amber-300 text-white px-7 py-3 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Complaint now
            </Link>

            <Link
              to="/dashboard/readmore"
              className="border border-white text-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 hover:bg-white/30 transition">
            <FaCubesStacked className="text-4xl text-green-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">1000+</h3>
              <p className="text-gray-200">Complaints</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 hover:bg-white/30 transition">
            <FaCubesStacked className="text-4xl text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">900+</h3>
              <p className="text-gray-200">Resolved</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 hover:bg-white/30 transition">
            <FaCubesStacked className="text-4xl text-yellow-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">120+</h3>
              <p className="text-gray-200">Pending</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 hover:bg-white/30 transition">
            <FaCubesStacked className="text-4xl text-red-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-gray-200">Departments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
