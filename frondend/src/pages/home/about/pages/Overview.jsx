import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-600">IUB</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The Islamia University of Bahawalpur - A Legacy of Excellence
            </p>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Islamia University of Bahawalpur (IUB) is a public sector
                university located in Bahawalpur, Punjab, Pakistan. It is one of
                the oldest and most prestigious educational institutions in the
                region, known for its commitment to academic excellence,
                research, and community service.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    📍 Location
                  </h3>
                  <p className="text-gray-600">Bahawalpur, Punjab, Pakistan</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    🏛️ Established
                  </h3>
                  <p className="text-gray-600">1975</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    🎓 Chancellor
                  </h3>
                  <p className="text-gray-600">Governor of Punjab</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    👨‍🎓 Students
                  </h3>
                  <p className="text-gray-600">30,000+</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                IUB offers a wide range of undergraduate, graduate, and doctoral
                programs across various disciplines including Arts, Sciences,
                Engineering, Law, Business, and Islamic Studies. The university
                is committed to providing quality education and fostering
                intellectual growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
