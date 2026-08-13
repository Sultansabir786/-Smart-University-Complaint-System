import React from "react";
import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaNewspaper,
  FaCalendarAlt,
  FaClipboardList,
  FaTrophy,
  FaGraduationCap,
  FaMicrophone,
  FaUsers,
  FaLaptop,
  FaBook,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const Announcements = () => {
  const announcements = [
    {
      icon: <FaNewspaper className="text-5xl text-yellow-500" />,
      title: "Latest News",
      description: "Stay updated with the latest news and developments at IUB.",
      link: "/announcements/news",
      count: "12 New",
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-yellow-500" />,
      title: "Events",
      description: "Upcoming events, seminars, workshops, and conferences.",
      link: "/announcements/events",
      count: "8 Upcoming",
    },
    {
      icon: <FaClipboardList className="text-5xl text-yellow-500" />,
      title: "Notices",
      description:
        "Official notices and important announcements from administration.",
      link: "/announcements/notices",
      count: "5 New",
    },
    {
      icon: <FaTrophy className="text-5xl text-yellow-500" />,
      title: "Results",
      description: "Exam results, merit lists, and academic achievements.",
      link: "/announcements/results",
      count: "3 New",
    },
    {
      icon: <FaGraduationCap className="text-5xl text-yellow-500" />,
      title: "Admissions",
      description:
        "Admission announcements, deadlines, and application updates.",
      link: "/announcements/admissions",
      count: "Open",
    },
    {
      icon: <FaMicrophone className="text-5xl text-yellow-500" />,
      title: "Seminars & Workshops",
      description: "Academic seminars, workshops, and training sessions.",
      link: "/announcements/seminars",
      count: "6 Upcoming",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-500" />,
      title: "Student Activities",
      description: "Student clubs, societies, and extracurricular activities.",
      link: "/announcements/activities",
      count: "10 Active",
    },
    {
      icon: <FaLaptop className="text-5xl text-yellow-500" />,
      title: "Online Programs",
      description:
        "Online courses, webinars, and digital learning opportunities.",
      link: "/announcements/online",
      count: "4 New",
    },
    {
      icon: <FaBook className="text-5xl text-yellow-500" />,
      title: "Academic Calendar",
      description:
        "Important academic dates, holidays, and semester schedules.",
      link: "/announcements/calendar",
      count: "Updated",
    },
    {
      icon: <FaBuilding className="text-5xl text-yellow-500" />,
      title: "Campus Updates",
      description:
        "Campus development, facility updates, and infrastructure news.",
      link: "/announcements/campus",
      count: "2 New",
    },
    {
      icon: <FaGlobe className="text-5xl text-yellow-500" />,
      title: "International News",
      description:
        "International collaborations, exchange programs, and global initiatives.",
      link: "/announcements/international",
      count: "3 New",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/dashboard"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Home
          </Link>
          <Link
            to="/announcements/news"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            View Latest News →
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaBullhorn className="text-6xl text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-600">Announcements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news, events, and updates from The
            Islamia University of Bahawalpur
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 group relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                  {item.count}
                </span>
                <span className="mt-4 text-yellow-600 font-medium group-hover:text-yellow-700">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 bg-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">50+</p>
            <p className="text-gray-600">Announcements</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">24/7</p>
            <p className="text-gray-600">Updated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">100%</p>
            <p className="text-gray-600">Transparent</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">Instant</p>
            <p className="text-gray-600">Notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
