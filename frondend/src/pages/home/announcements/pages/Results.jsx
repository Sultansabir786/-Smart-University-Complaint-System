import React from "react";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardList,
  FaAward,
  FaStar,
  FaUsers,
  FaChartLine,
  FaDownload,
} from "react-icons/fa";

const Results = () => {
  const results = [
    {
      title: "BS Computer Science - Spring 2026",
      program: "BS Computer Science",
      semester: "Spring 2026",
      date: "March 25, 2026",
      status: "Published",
      totalStudents: 150,
      passPercentage: "92%",
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
    },
    {
      title: "BS Mathematics - Spring 2026",
      program: "BS Mathematics",
      semester: "Spring 2026",
      date: "March 22, 2026",
      status: "Published",
      totalStudents: 80,
      passPercentage: "88%",
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
    },
    {
      title: "BS English - Spring 2026",
      program: "BS English",
      semester: "Spring 2026",
      date: "March 20, 2026",
      status: "Published",
      totalStudents: 65,
      passPercentage: "90%",
      icon: <FaAward className="text-4xl text-yellow-500" />,
    },
    {
      title: "MBA - Spring 2026",
      program: "MBA",
      semester: "Spring 2026",
      date: "March 18, 2026",
      status: "Published",
      totalStudents: 120,
      passPercentage: "85%",
      icon: <FaStar className="text-4xl text-yellow-500" />,
    },
    {
      title: "BS Physics - Spring 2026",
      program: "BS Physics",
      semester: "Spring 2026",
      date: "March 15, 2026",
      status: "Published",
      totalStudents: 55,
      passPercentage: "87%",
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
    },
    {
      title: "LLB - Spring 2026",
      program: "LLB",
      semester: "Spring 2026",
      date: "March 12, 2026",
      status: "Published",
      totalStudents: 90,
      passPercentage: "89%",
      icon: <FaAward className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/announcements/notices"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Notices
          </Link>
          <Link
            to="/announcements"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Back to Announcements
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaTrophy className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Exam <span className="text-yellow-600">Results</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Check your academic performance and achievements
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{result.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {result.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <FaGraduationCap /> {result.program}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaCalendarAlt /> {result.semester}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClipboardList /> {result.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <FaUsers /> {result.totalStudents} Students
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <FaCheckCircle /> {result.status}
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
                        Pass Rate: {result.passPercentage}
                      </span>
                    </div>
                    <button className="mt-3 text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center gap-1">
                      <FaDownload /> Download Results
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4 bg-yellow-50 p-6 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">50+</p>
              <p className="text-sm text-gray-600">Results Published</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">10K+</p>
              <p className="text-sm text-gray-600">Students Benefited</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">88%</p>
              <p className="text-sm text-gray-600">Average Pass Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">100%</p>
              <p className="text-sm text-gray-600">Transparent Process</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              📌 Important Information
            </h3>
            <p className="text-gray-700">
              Results are provisional and subject to verification by the
              Examination Department. Students are advised to collect their
              official transcripts from the department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
