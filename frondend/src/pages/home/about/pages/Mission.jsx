import React from "react";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission & <span className="text-yellow-600">Vision</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality higher education and conduct research that
                  contributes to the socio-economic development of Pakistan,
                  while fostering critical thinking, innovation, and ethical
                  values.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Excellence in teaching and learning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Cutting-edge research and innovation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Community engagement and service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Character building and ethical values
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  👁️ Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To become a world-class university recognized globally for
                  academic excellence, research innovation, and contribution to
                  society.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Global recognition and ranking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    International collaborations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Technology-driven education
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    Sustainable development goals
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Core Values
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow">
                  <span className="block text-3xl">📚</span>
                  <span className="text-sm font-semibold">Excellence</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow">
                  <span className="block text-3xl">🔬</span>
                  <span className="text-sm font-semibold">Innovation</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow">
                  <span className="block text-3xl">🤝</span>
                  <span className="text-sm font-semibold">Integrity</span>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow">
                  <span className="block text-3xl">🌍</span>
                  <span className="text-sm font-semibold">Diversity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
