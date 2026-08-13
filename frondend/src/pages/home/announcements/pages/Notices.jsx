import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaCalendarAlt,
  FaUser,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";

const Notices = () => {
  const notices = [
    {
      title: "Mid-Term Examination Schedule 2026",
      date: "March 20, 2026",
      department: "Examination Department",
      type: "Important",
      description:
        "The mid-term examination schedule for the Spring semester 2026 has been released. All students are requested to check their exam dates and venues.",
      icon: <FaExclamationTriangle className="text-3xl text-red-500" />,
    },
    {
      title: "Summer Vacation Announcement",
      date: "March 18, 2026",
      department: "Academic Affairs",
      type: "General",
      description:
        "The university will remain closed from June 15 to August 15, 2026, for summer vacation. Administrative offices will function with limited staff.",
      icon: <FaInfoCircle className="text-3xl text-blue-500" />,
    },
    {
      title: "Scholarship Application Deadline Extended",
      date: "March 15, 2026",
      department: "Financial Aid Office",
      type: "Urgent",
      description:
        "The deadline for scholarship applications has been extended to April 30, 2026. Eligible students are encouraged to apply before the new deadline.",
      icon: <FaExclamationTriangle className="text-3xl text-yellow-500" />,
    },
    {
      title: "New Library Timings Announced",
      date: "March 12, 2026",
      department: "Library Services",
      type: "General",
      description:
        "The library will now operate from 7:00 AM to 12:00 AM (midnight) to facilitate students during exam preparation.",
      icon: <FaInfoCircle className="text-3xl text-green-500" />,
    },
    {
      title: "Hostel Room Allotment Notice",
      date: "March 10, 2026",
      department: "Hostel Administration",
      type: "Important",
      description:
        "Hostel room allotment for the upcoming academic year will commence from April 1, 2026. Online applications are now open.",
      icon: <FaClipboardList className="text-3xl text-purple-500" />,
    },
    {
      title: "Campus Security Advisory",
      date: "March 8, 2026",
      department: "Security Office",
      type: "Important",
      description:
        "All students and staff are advised to carry their ID cards at all times. Security has been enhanced with additional CCTV cameras.",
      icon: <FaExclamationTriangle className="text-3xl text-orange-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/announcements/events"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Events
          </Link>
          <Link
            to="/announcements/results"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Results →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaClipboardList className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Official <span className="text-yellow-600">Notices</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Important announcements and notifications for the IUB community
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border-l-4 border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{notice.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-800">
                        {notice.title}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          notice.type === "Urgent"
                            ? "bg-red-100 text-red-700"
                            : notice.type === "Important"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {notice.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {notice.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser /> {notice.department}
                      </span>
                    </div>
                    <p className="text-gray-700">{notice.description}</p>
                    <button className="mt-2 text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                      View Full Notice →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">20+</p>
              <p className="text-sm text-gray-600">Active Notices</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">Daily</p>
              <p className="text-sm text-gray-600">Updates</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">Verified</p>
              <p className="text-sm text-gray-600">Official Source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
