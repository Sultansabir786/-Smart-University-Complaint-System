import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUniversity,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaUniversity className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  The Islamia University
                </h3>
                <p className="text-yellow-400 text-sm -mt-1">of Bahawalpur</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A premier institution of higher education committed to academic
              excellence, research innovation, and community development since
              1975.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/overview"
                  className="hover:text-yellow-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/announcements"
                  className="hover:text-yellow-400 transition"
                >
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-yellow-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/ComplaintForm"
                  className="hover:text-yellow-400 transition"
                >
                  Complaint Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support & Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/help/faq"
                  className="hover:text-yellow-400 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/help/guidelines"
                  className="hover:text-yellow-400 transition"
                >
                  Guidelines & Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/help/process"
                  className="hover:text-yellow-400 transition"
                >
                  Complaint Process
                </Link>
              </li>
              <li>
                <Link
                  to="/help/documents"
                  className="hover:text-yellow-400 transition"
                >
                  Required Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/help/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Location */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>
                  The Islamia University of Bahawalpur
                  <br />
                  Baghdad-ul-Jadeed Campus
                  <br />
                  Bahawalpur, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <span>+92-62-9250235</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <span>info@iub.edu.pk</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-yellow-400 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Quick Links Row */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            <Link to="/dashboard" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link
              to="/about/overview"
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>
            <Link to="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
            <Link
              to="/announcements"
              className="hover:text-yellow-400 transition"
            >
              Announcements
            </Link>
            <Link to="/help" className="hover:text-yellow-400 transition">
              Help
            </Link>
            <Link
              to="/ComplaintForm"
              className="hover:text-yellow-400 transition"
            >
              Complaint
            </Link>
            <Link
              to="/portal/student"
              className="hover:text-yellow-400 transition"
            >
              Portals
            </Link>
          </div>
        </div>

        {/* Map Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Find Us on Map
            </h4>
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-xl border-2 border-yellow-400/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.518392410947!2d71.684739!3d29.396222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9e7a8a6f2c3d%3A0x4f9c8a9b6e5d4f3a!2sThe%20Islamia%20University%20of%20Bahawalpur%20(IUB)!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IUB Location Map"
                className="hover:opacity-90 transition-opacity duration-300"
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm mt-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Baghdad-ul-Jadeed Campus, Bahawalpur, Punjab, Pakistan
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} The Islamia University of
            Bahawalpur. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Designed & Developed by IUB IT Department
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
