import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/iuba.png";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-black to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="IUB Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-white text-sm sm:text-lg font-bold leading-tight">
                The Islamia University
              </h1>
              <p className="text-yellow-400 text-xs sm:text-sm -mt-1">
                of Bahawalpur
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Pure HTML + Tailwind */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {/* Home */}
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-flex items-center">
                About
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/about/overview"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/about/history"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    History
                  </Link>
                  <Link
                    to="/about/mission"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/about/leadership"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/about/campus"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Campus
                  </Link>
                  <Link
                    to="/about/accreditation"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Accreditation
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-flex items-center">
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/servicess/academic"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Academic Services
                  </Link>
                  <Link
                    to="/servicess/student"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Student Services
                  </Link>
                  <Link
                    to="/servicess/administrative"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Administrative Services
                  </Link>
                  <Link
                    to="/servicess/it"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    IT Services
                  </Link>
                  <Link
                    to="/servicess/library"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Library Services
                  </Link>
                  <Link
                    to="/servicess/career"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Career Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Announcements Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-flex items-center">
                Announcements
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/announcements"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    All Announcements
                  </Link>
                  <Link
                    to="/announcements/news"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Latest News
                  </Link>
                  <Link
                    to="/announcements/events"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Events
                  </Link>
                  <Link
                    to="/announcements/notices"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Notices
                  </Link>
                  <Link
                    to="/announcements/results"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Results
                  </Link>
                </div>
              </div>
            </div>

            {/* Help Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 inline-flex items-center">
                Help
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/help/faq"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/help/guidelines"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Guidelines
                  </Link>
                  <Link
                    to="/help/process"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Process
                  </Link>
                  <Link
                    to="/help/documents"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Required Documents
                  </Link>
                  <Link
                    to="/help/contact"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>

            {/* Complaint Now Button with Dropdown */}
            <div className="relative group">
              <Link
                to="/dashboard/ComplaintForm"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 inline-flex items-center"
              >
                Complaint Now
              </Link>
            </div>
            <div className="relative group">
              <Link
                to="/dashboard/mycomplaints"
                className="bg-red-400 hover:bg-red-300 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 inline-flex items-center"
              >
                My Complaint
              </Link>
            </div>
          </div>
          {/* Prfile */}
          <User />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
