import React from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaClock,
  FaShare,
  FaBookmark,
} from "react-icons/fa";

const LatestNews = () => {
  const news = [
    {
      title: "IUB Ranked Among Top 10 Universities in Pakistan",
      date: "March 15, 2026",
      category: "Achievement",
      author: "Public Relations Office",
      description:
        "The Islamia University of Bahawalpur has been ranked among the top 10 universities in Pakistan by the Higher Education Commission (HEC) for academic excellence and research output.",
      image: "🏆",
    },
    {
      title: "New Research Center Inaugurated at IUB",
      date: "March 12, 2026",
      category: "Campus Development",
      author: "Research Directorate",
      description:
        "A state-of-the-art research center for advanced computing and artificial intelligence has been inaugurated at the main campus, equipped with modern facilities.",
      image: "🔬",
    },
    {
      title: "IUB Students Win National Debate Competition",
      date: "March 10, 2026",
      category: "Student Achievement",
      author: "Student Affairs Office",
      description:
        "The IUB debate team secured first position in the National Inter-University Debate Competition held at Islamabad, bringing pride to the university.",
      image: "🎤",
    },
    {
      title: "International Conference on Climate Change",
      date: "March 8, 2026",
      category: "Event",
      author: "Department of Environmental Sciences",
      description:
        "The Department of Environmental Sciences is organizing an International Conference on Climate Change and Sustainable Development on April 15-16, 2026.",
      image: "🌍",
    },
    {
      title: "New Scholarship Program Announced",
      date: "March 5, 2026",
      category: "Scholarship",
      author: "Financial Aid Office",
      description:
        "A new merit-based scholarship program for outstanding students has been announced for the upcoming academic year 2026-27.",
      image: "🎓",
    },
    {
      title: "IUB Signs MoU with International University",
      date: "March 3, 2026",
      category: "Partnership",
      author: "Office of International Affairs",
      description:
        "The Islamia University of Bahawalpur has signed a Memorandum of Understanding (MoU) with a leading international university for academic collaboration and research.",
      image: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/announcements"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Announcements
          </Link>
          <Link
            to="/announcements/events"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Events →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaNewspaper className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Latest <span className="text-yellow-600">News</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Stay updated with the latest developments at IUB
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{item.image}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser /> {item.author}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="flex gap-3">
                      <button className="text-yellow-600 hover:text-yellow-700 text-sm flex items-center gap-1">
                        <FaShare /> Share
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-700 text-sm flex items-center gap-1">
                        <FaBookmark /> Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              📌 Stay Connected
            </h3>
            <p className="text-gray-700">
              Subscribe to our newsletter and follow us on social media to
              receive instant updates about university news and events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
