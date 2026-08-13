import React from "react";
import { FaCubesStacked } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.iub.edu.pk/uploads/mainvideo/main.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

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
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link to="/signUp">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </Link>
            <Link to="/readmore">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">Easy Submission</h3>
              <p className="text-gray-300 text-sm">
                Submit complaints quickly and easily
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">Track Progress</h3>
              <p className="text-gray-300 text-sm">
                Monitor your complaint status in real-time
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-semibold">Transparent System</h3>
              <p className="text-gray-300 text-sm">
                Clear communication and resolution process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
