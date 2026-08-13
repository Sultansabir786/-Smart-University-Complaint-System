import React from "react";
import vc from "../../../assets/VC.jpg";

const ViceChancellor = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <div className="flex flex-col items-center">
            <img
              src={vc}
              alt="Vice Chancellor"
              className="w-72 h-80 object-cover rounded-xl shadow-md"
            />

            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              Prof. Dr. Muhammad Kamran
            </h3>

            <p className="text-green-700 font-medium">Vice Chancellor</p>
          </div>

          {/* Message */}
          <div className="lg:col-span-2">
            <span className="text-green-700 font-semibold uppercase tracking-widest">
              Message
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
              Building a Transparent Complaint Culture
            </h2>

            <p className="text-gray-700 leading-8 text-lg mb-5 text-justify">
              At The Islamia University of Bahawalpur, every student, teacher,
              and staff member deserves a respectful, secure, and supportive
              academic environment. The University Complaint Management System
              has been established to provide a transparent and efficient
              platform where concerns can be submitted, reviewed, and resolved
              in a fair and timely manner.
            </p>

            <p className="text-gray-700 leading-8 text-lg mb-5 text-justify">
              Every complaint received through this portal is treated with
              confidentiality and directed to the relevant department for
              appropriate action. Our objective is not only to resolve issues
              but also to improve university services, strengthen
              accountability, and enhance trust between students, faculty, and
              administration.
            </p>

            <p className="text-gray-700 leading-8 text-lg text-justify">
              I encourage every member of our university community to use this
              platform responsibly by reporting genuine concerns and providing
              constructive feedback. Together, we can create an inclusive,
              transparent, and responsive institution that values every voice.
            </p>

            <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViceChancellor;
