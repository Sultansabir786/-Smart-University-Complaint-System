import React from "react";
import { Link } from "react-router-dom";

const Leadership = () => {
  const leaders = [
    {
      name: "Prof. Dr. Athar Mahboob",
      title: "Vice Chancellor",
      department: "Office of the Vice Chancellor",
      image: "👨‍🏫",
    },
    {
      name: "Prof. Dr. Muhammad Ashraf",
      title: "Registrar",
      department: "Registrar Office",
      image: "👨‍💼",
    },
    {
      name: "Prof. Dr. Khalid Mahmood",
      title: "Dean - Faculty of Arts",
      department: "Faculty of Arts",
      image: "👨‍🎓",
    },
    {
      name: "Prof. Dr. Saeed Ahmad",
      title: "Dean - Faculty of Sciences",
      department: "Faculty of Sciences",
      image: "👨‍🔬",
    },
    {
      name: "Prof. Dr. Muhammad Aslam",
      title: "Dean - Faculty of Engineering",
      department: "Faculty of Engineering",
      image: "👨‍🔧",
    },
    {
      name: "Prof. Dr. Fatima Hassan",
      title: "Dean - Faculty of Law",
      department: "Faculty of Law",
      image: "👩‍⚖️",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              University <span className="text-yellow-600">Leadership</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet our dedicated leadership team
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-yellow-50 transition p-6 rounded-xl text-center"
                >
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {leader.name}
                  </h3>
                  <p className="text-yellow-600 font-medium">{leader.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {leader.department}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                📌 Leadership Message
              </h3>
              <p className="text-gray-700">
                "We are committed to providing quality education, fostering
                research excellence, and developing future leaders who will
                contribute positively to society and the nation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
