import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaComments,
} from "react-icons/fa";

const ContactSupport = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-3xl text-yellow-500" />,
      title: "Phone Support",
      details: "+92-62-9250235",
      additional: "Extension: 1234",
      description: "Monday to Friday, 9:00 AM - 5:00 PM",
    },
    {
      icon: <FaEnvelope className="text-3xl text-yellow-500" />,
      title: "Email Support",
      details: "support@iub.edu.pk",
      additional: "info@iub.edu.pk",
      description: "Response within 24 hours",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-yellow-500" />,
      title: "Visit Us",
      details: "Main Campus, Bahawalpur",
      additional: "Punjab, Pakistan",
      description: "Student Affairs Office, Block A",
    },
    {
      icon: <FaClock className="text-3xl text-yellow-500" />,
      title: "Working Hours",
      details: "Monday - Friday",
      additional: "8:00 AM - 4:00 PM",
      description: "Closed on weekends",
    },
  ];

  const departments = [
    {
      name: "Student Affairs Office",
      extension: "1001",
      email: "students@iub.edu.pk",
    },
    {
      name: "Academic Department",
      extension: "1002",
      email: "academics@iub.edu.pk",
    },
    { name: "IT Support", extension: "1003", email: "it@iub.edu.pk" },
    {
      name: "Financial Aid Office",
      extension: "1004",
      email: "finance@iub.edu.pk",
    },
    {
      name: "Library Services",
      extension: "1005",
      email: "library@iub.edu.pk",
    },
    {
      name: "Hostel Administration",
      extension: "1006",
      email: "hostels@iub.edu.pk",
    },
    {
      name: "Examination Department",
      extension: "1007",
      email: "exam@iub.edu.pk",
    },
    {
      name: "Complaint Management",
      extension: "1008",
      email: "complaints@iub.edu.pk",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebook className="text-3xl" />,
      link: "#",
      color: "text-blue-600",
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      link: "#",
      color: "text-blue-400",
    },
    {
      icon: <FaYoutube className="text-3xl" />,
      link: "#",
      color: "text-red-600",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      link: "#",
      color: "text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/help"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Help
          </Link>
          <Link
            to="/dashboard"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Return Home →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaHeadset className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Contact <span className="text-yellow-600">Support</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                We're here to help! Reach out to us through any of these
                channels
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl text-center border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="font-semibold text-gray-900">{item.details}</p>
                <p className="text-sm text-gray-600">{item.additional}</p>
                <p className="text-xs text-gray-500 mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Department Contacts */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📋 Department Directory
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-4 rounded-xl border border-gray-100 hover:border-yellow-400 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-gray-800">{dept.name}</h4>
                    <p className="text-sm text-gray-600">
                      Ext: {dept.extension}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-yellow-600">{dept.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaGlobe /> Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`${social.color} hover:scale-110 transition-transform duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FaComments /> Live Chat Support
            </h3>
            <p className="text-gray-700">
              Our support team is available on live chat from 9:00 AM to 5:00
              PM, Monday to Friday. Click the chat icon at the bottom right to
              start a conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
