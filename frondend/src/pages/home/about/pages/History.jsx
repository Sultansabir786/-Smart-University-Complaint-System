import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">History</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A Journey of Excellence Since 1975
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  1975 - Foundation
                </h3>
                <p className="text-gray-700 mt-2">
                  The Islamia University of Bahawalpur was established in 1975
                  as a public sector university with a vision to provide quality
                  education to the people of Southern Punjab.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  1980s - Expansion
                </h3>
                <p className="text-gray-700 mt-2">
                  The university expanded its academic programs and established
                  new faculties including Arts, Sciences, and Islamic Studies.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  2000s - Modernization
                </h3>
                <p className="text-gray-700 mt-2">
                  Introduction of modern academic programs, research centers,
                  and state-of-the-art facilities to meet international
                  standards.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Present Day
                </h3>
                <p className="text-gray-700 mt-2">
                  Today, IUB stands as one of Pakistan's leading universities,
                  with over 30,000 students and a reputation for academic
                  excellence and research innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
