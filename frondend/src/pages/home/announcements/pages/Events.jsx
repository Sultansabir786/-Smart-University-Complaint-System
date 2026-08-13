import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaMicrophone,
  FaGraduationCap,
  FaLaptop,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const Events = () => {
  const events = [
    {
      title: "International Conference on Climate Change",
      date: "April 15-16, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, IUB",
      organizer: "Department of Environmental Sciences",
      type: "Conference",
      description:
        "A two-day international conference focusing on climate change mitigation strategies and sustainable development goals.",
      icon: <FaMicrophone className="text-4xl text-yellow-500" />,
    },
    {
      title: "Annual Sports Gala 2026",
      date: "April 20-25, 2026",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex, IUB",
      organizer: "Sports Directorate",
      type: "Sports",
      description:
        "Week-long sports competition featuring cricket, football, basketball, athletics, and indoor games.",
      icon: <FaUsers className="text-4xl text-yellow-500" />,
    },
    {
      title: "Career Fair 2026",
      date: "April 28, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Exhibition Hall, IUB",
      organizer: "Career Services Office",
      type: "Career Fair",
      description:
        "Connect with leading employers, explore job opportunities, and network with industry professionals.",
      icon: <FaBriefcase className="text-4xl text-yellow-500" />,
    },
    {
      title: "Research Symposium 2026",
      date: "May 5-6, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Research Center, IUB",
      organizer: "Research Directorate",
      type: "Academic",
      description:
        "Showcase of cutting-edge research, poster presentations, and keynote speeches by renowned scholars.",
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
    },
    {
      title: "Web Development Workshop",
      date: "May 10-12, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab 3, IUB",
      organizer: "Department of Computer Science",
      type: "Workshop",
      description:
        "Hands-on workshop on full-stack web development using modern technologies and frameworks.",
      icon: <FaLaptop className="text-4xl text-yellow-500" />,
    },
    {
      title: "Alumni Meet 2026",
      date: "May 15, 2026",
      time: "6:00 PM - 10:00 PM",
      location: "Alumni Hall, IUB",
      organizer: "Alumni Association",
      type: "Networking",
      description:
        "Annual alumni gathering to reconnect, network, and celebrate the achievements of IUB graduates.",
      icon: <FaUserTie className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/announcements/news"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to News
          </Link>
          <Link
            to="/announcements/notices"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Notices →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaCalendarAlt className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Upcoming <span className="text-yellow-600">Events</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Don't miss out on exciting events at IUB
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{event.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-800">
                        {event.title}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt /> {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClock /> {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {event.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaUserTie /> {event.organizer}
                      </p>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">
                      {event.description}
                    </p>
                    <button className="mt-3 text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                      Register Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">15+</p>
              <p className="text-sm text-gray-600">Events This Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">1000+</p>
              <p className="text-sm text-gray-600">Participants Expected</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">Free</p>
              <p className="text-sm text-gray-600">Entry for Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
