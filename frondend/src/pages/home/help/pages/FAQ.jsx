import React from "react";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaGraduationCap,
  FaFileAlt,
  FaUniversity,
  FaBook,
  FaGlobe,
  FaBuilding,
  FaUserGraduate,
  FaClock,
  FaMoneyBillWave,
  FaHandsHelping,
} from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      icon: <FaGraduationCap className="text-3xl text-yellow-500" />,
      question: "How can I apply for admission at IUB?",
      answer:
        "You can apply online through the IUB admission portal. Visit the admissions section, fill out the application form, upload required documents, and submit the application fee. Admissions are announced twice a year for fall and spring semesters.",
      category: "Admissions",
    },
    {
      icon: <FaFileAlt className="text-3xl text-yellow-500" />,
      question: "What documents are required for admission?",
      answer:
        "Required documents include: 1) F.Sc./A-Level Certificate (for undergraduate), 2) Previous academic transcripts, 3) CNIC/B-Form copy, 4) Passport size photographs, 5) Domicile certificate, and 6) Character certificate.",
      category: "Admissions",
    },
    {
      icon: <FaUniversity className="text-3xl text-yellow-500" />,
      question: "What programs are offered at IUB?",
      answer:
        "IUB offers a wide range of programs including BS, MS, MPhil, and PhD in multiple disciplines such as Arts, Sciences, Engineering, Law, Business Administration, Computer Science, Islamic Studies, and more. Visit the programs section for complete details.",
      category: "Academics",
    },
    {
      icon: <FaBook className="text-3xl text-yellow-500" />,
      question: "How can I access the university library?",
      answer:
        "All registered students and faculty members can access the university library using their ID cards. The library is open from 7:00 AM to 12:00 AM (midnight). Digital resources are accessible 24/7 through the online library portal.",
      category: "Facilities",
    },
    {
      icon: <FaGlobe className="text-3xl text-yellow-500" />,
      question: "Is there international student exchange programs?",
      answer:
        "Yes, IUB has partnerships with multiple international universities. Students can participate in exchange programs, study abroad opportunities, and international conferences. Contact the Office of International Affairs for details.",
      category: "International",
    },
    {
      icon: <FaBuilding className="text-3xl text-yellow-500" />,
      question: "How can I apply for hostel accommodation?",
      answer:
        "Hostel accommodation applications are submitted online through the hostel portal during the admission process. Separate hostels are available for boys and girls. Priority is given to students from outside the city.",
      category: "Facilities",
    },
    {
      icon: <FaUserGraduate className="text-3xl text-yellow-500" />,
      question: "What scholarships are available at IUB?",
      answer:
        "IUB offers various scholarships including merit scholarships, need-based financial aid, HEC scholarships, and special scholarships for outstanding students. Visit the Financial Aid Office for complete details and application deadlines.",
      category: "Financial",
    },
    {
      icon: <FaClock className="text-3xl text-yellow-500" />,
      question: "What are the university working hours?",
      answer:
        "The university operates from 8:00 AM to 4:00 PM, Monday to Friday. Academic departments are available from 9:00 AM to 5:00 PM. Administrative offices are open from 8:00 AM to 3:00 PM.",
      category: "Administrative",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-yellow-500" />,
      question: "How can I pay my tuition fees?",
      answer:
        "Tuition fees can be paid online through the university payment portal using bank cards. Students can also pay through designated bank branches. Fee payment deadlines and schedules are available on the finance section.",
      category: "Financial",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-yellow-500" />,
      question: "How do I file a complaint?",
      answer:
        "You can file a complaint through the university complaint management system online. Login to the system, select the complaint category, provide details, and submit. You'll receive a tracking number for follow-up.",
      category: "Complaint",
    },
  ];

  const categories = [
    "All",
    "Admissions",
    "Academics",
    "Facilities",
    "International",
    "Financial",
    "Administrative",
    "Complaint",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/help"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Help
          </Link>
          <Link
            to="/help/guidelines"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Next: Guidelines →
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaQuestionCircle className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Frequently Asked{" "}
                <span className="text-yellow-600">Questions</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Quick answers to the most common questions about IUB
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-600 rounded-full text-sm font-medium transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mt-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                  <div className="text-3xl flex-shrink-0">{faq.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-800">
                        {faq.question}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <div className="text-gray-600 mt-3 text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </summary>
              </details>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              📌 Still Have Questions?
            </h3>
            <p className="text-gray-700">
              If you couldn't find the answer you're looking for, please
              <Link
                to="/help/contact"
                className="text-yellow-600 hover:text-yellow-700 font-medium ml-1"
              >
                contact our support team
              </Link>
              . We're here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
