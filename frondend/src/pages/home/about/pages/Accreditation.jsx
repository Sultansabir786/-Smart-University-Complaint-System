import React from "react";
import { Link } from "react-router-dom";
const Accreditation = () => {
  const accreditations = [
    {
      name: "Higher Education Commission (HEC)",
      description: "Recognized by the Higher Education Commission of Pakistan",
      status: "✓ Accredited",
      icon: "🎓",
    },
    {
      name: "Pakistan Engineering Council (PEC)",
      description: "Accredited engineering programs",
      status: "✓ Accredited",
      icon: "⚙️",
    },
    {
      name: "Pakistan Bar Council (PBC)",
      description: "Approved law programs",
      status: "✓ Accredited",
      icon: "⚖️",
    },
    {
      name: "National Computing Education Accreditation Council (NCEAC)",
      description: "Accredited computer science programs",
      status: "✓ Accredited",
      icon: "💻",
    },
    {
      name: "Association of Commonwealth Universities (ACU)",
      description: "International membership",
      status: "✓ Member",
      icon: "🌍",
    },
    {
      name: "International Association of Universities (IAU)",
      description: "Global recognition",
      status: "✓ Member",
      icon: "📜",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accreditation &{" "}
              <span className="text-yellow-600">Recognition</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quality assured education recognized nationally and
              internationally
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {accreditations.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 hover:border-yellow-400 transition p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      <span className="inline-block mt-2 text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                📌 Quality Assurance
              </h3>
              <p className="text-gray-700">
                The Islamia University of Bahawalpur is committed to maintaining
                the highest standards of academic quality and is continuously
                working to improve its programs and services to meet
                international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accreditation;
