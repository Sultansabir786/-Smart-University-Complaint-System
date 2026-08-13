import React from "react";
import { Link } from "react-router-dom";
import {
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaTrophy,
  FaGlobe,
  FaMicroscope,
  FaBuilding,
  FaClock,
  FaAward,
  FaHandsHelping,
  FaRocket,
  FaStar,
  FaNewspaper,
  FaCalendarAlt,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const Readmore = () => {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      number: "30,000+",
      label: "Students Enrolled",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
      number: "1,200+",
      label: "Faculty Members",
    },
    {
      icon: <FaBook className="text-4xl text-yellow-500" />,
      number: "50+",
      label: "Academic Programs",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500" />,
      number: "100+",
      label: "International Partners",
    },
  ];

  const highlights = [
    {
      icon: <FaTrophy className="text-4xl text-yellow-600" />,
      title: "Academic Excellence",
      description:
        "Ranked among the top universities in Pakistan with HEC recognition and international accreditations.",
      image: "🏆",
    },
    {
      icon: <FaMicroscope className="text-4xl text-yellow-600" />,
      title: "Research Innovation",
      description:
        "Advanced research centers focusing on cutting-edge technology, environmental science, and social development.",
      image: "🔬",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-yellow-600" />,
      title: "Community Impact",
      description:
        "Active community engagement programs, outreach initiatives, and social development projects.",
      image: "🤝",
    },
    {
      icon: <FaRocket className="text-4xl text-yellow-600" />,
      title: "Student Success",
      description:
        "High employability rate with graduates working in leading organizations worldwide.",
      image: "🚀",
    },
  ];

  const news = [
    {
      title: "IUB Ranked Among Top 10 Universities",
      date: "March 2026",
      category: "Achievement",
      image: "📊",
    },
    {
      title: "New Research Center Inaugurated",
      date: "February 2026",
      category: "Campus",
      image: "🏗️",
    },
    {
      title: "International Conference on Climate Change",
      date: "January 2026",
      category: "Event",
      image: "🌍",
    },
  ];

  const programs = [
    "BS Computer Science",
    "BS Mathematics",
    "BS English",
    "BS Physics",
    "BS Chemistry",
    "BS Biology",
    "BS Economics",
    "BS Psychology",
    "MBA",
    "LLB",
    "B.Ed",
    "BBA",
    "MS in Various Fields",
    "PhD Programs",
  ];

  const testimonials = [
    {
      quote:
        "IUB provided me with an excellent education and countless opportunities. The faculty is outstanding and the campus is beautiful.",
      author: "Dr. Ahmad Ali",
      role: "Alumnus, Class of 2015",
    },
    {
      quote:
        "The research facilities and academic environment at IUB are world-class. I'm proud to be part of this institution.",
      author: "Prof. Sarah Khan",
      role: "Faculty Member, Department of Computer Science",
    },
    {
      quote:
        "IUB gave me the skills and confidence to succeed in my career. The support from teachers and staff is amazing.",
      author: "Ms. Fatima Noor",
      role: "Student, BS Economics",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <FaUniversity className="text-7xl mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Islamia University
            </h1>
            <p className="text-2xl text-yellow-400 font-medium">
              of Bahawalpur
            </p>
            <p className="text-xl mt-4 max-w-3xl text-gray-300">
              A premier institution of higher education committed to academic
              excellence, research innovation, and community development
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/about/overview"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition flex items-center gap-2"
              >
                Learn More <FaArrowRight />
              </Link>
              <Link
                to="/dashboard"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 60L1440 0V60H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/dashboard"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
          >
            ← Back to Home
          </Link>
          <Link
            to="/about/overview"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            About IUB →
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 p-6 rounded-2xl text-center border border-gray-100 hover:border-yellow-400"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold text-gray-800">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <FaUniversity className="text-5xl text-yellow-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About <span className="text-yellow-600">IUB</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Islamia University of Bahawalpur (IUB) is a public sector
                  university located in Bahawalpur, Punjab, Pakistan.
                  Established in 1975, it is one of the oldest and most
                  prestigious educational institutions in the region.
                </p>
                <p>
                  IUB is committed to providing quality higher education and
                  conducting research that contributes to the socio-economic
                  development of Pakistan. The university fosters critical
                  thinking, innovation, and ethical values among its students.
                </p>
                <p>
                  With over 30,000 students and 1,200 faculty members, IUB
                  offers a wide range of undergraduate, graduate, and doctoral
                  programs across various disciplines including Arts, Sciences,
                  Engineering, Law, Business, and Islamic Studies.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  🎓 Established 1975
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                  📍 Bahawalpur, Punjab
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  🌍 HEC Recognized
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our <span className="text-yellow-600">Highlights</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl text-center border border-gray-100 hover:border-yellow-400 group"
            >
              <div className="text-6xl mb-4">{item.image}</div>
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Programs Section */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <FaGraduationCap className="text-5xl text-green-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Academic <span className="text-yellow-600">Programs</span>
              </h2>
              <p className="text-gray-600 mt-1">
                Diverse programs across multiple disciplines
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-xl text-center border border-gray-100 hover:border-green-400"
              >
                <p className="font-medium text-gray-800">{program}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <FaNewspaper className="text-5xl text-yellow-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest <span className="text-yellow-600">News</span>
              </h2>
              <p className="text-gray-600 mt-1">
                Stay updated with recent developments
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/announcements"
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
            >
              View All News <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <FaQuoteLeft className="text-5xl text-yellow-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                What People <span className="text-yellow-600">Say</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join <span className="text-yellow-400">IUB</span>?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take the first step towards a bright future. Apply now and become
            part of the IUB community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
