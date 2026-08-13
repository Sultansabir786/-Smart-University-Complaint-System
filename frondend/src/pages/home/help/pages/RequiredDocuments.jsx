import React from "react";
import { Link } from "react-router-dom";
import {
  FaFolderOpen,
  FaIdCard,
  FaFileAlt,
  FaGraduationCap,
  FaAddressCard,
  FaPhotoVideo,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaDownload,
  FaPrint,
  FaFilePdf,
} from "react-icons/fa";

const RequiredDocuments = () => {
  const documents = [
    {
      icon: <FaIdCard className="text-4xl text-yellow-500" />,
      title: "CNIC/B-Form",
      description:
        "Copy of Computerized National Identity Card (CNIC) for Pakistani citizens or B-Form for minors.",
      details: "Must be valid and attested",
    },
    {
      icon: <FaFileAlt className="text-4xl text-yellow-500" />,
      title: "Academic Transcripts",
      description:
        "Official transcripts of previous academic degrees including F.Sc./A-Level, BA/BSc, etc.",
      details: "Attested by Board/University",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
      title: "Degree Certificates",
      description:
        "Copies of all degree certificates and diplomas obtained from previous institutions.",
      details: "HEC verified if required",
    },
    {
      icon: <FaAddressCard className="text-4xl text-yellow-500" />,
      title: "Domicile Certificate",
      description:
        "Domicile certificate proving your residence in Bahawalpur or Punjab province.",
      details: "Issued by relevant authority",
    },
    {
      icon: <FaPhotoVideo className="text-4xl text-yellow-500" />,
      title: "Passport Size Photos",
      description:
        "Recent passport size photographs with white background for official records.",
      details: "4 copies required",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-yellow-500" />,
      title: "Character Certificate",
      description:
        "Character certificate from the last attended institution or a prominent citizen.",
      details: "Must be dated within 6 months",
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-yellow-500" />,
      title: "Online Application Form",
      description:
        "Complete and submit the online application form through the admission portal.",
      details: "Fill all required fields",
    },
    {
      icon: <FaDownload className="text-4xl text-yellow-500" />,
      title: "Downloaded Form",
      description:
        "Download the submitted application form, sign it, and upload the signed copy.",
      details: "Available in student portal",
    },
    {
      icon: <FaPrint className="text-4xl text-yellow-500" />,
      title: "Fee Deposit Slip",
      description:
        "Original bank slip or online payment confirmation for the admission fee.",
      details: "Keep receipt for records",
    },
    {
      icon: <FaFilePdf className="text-4xl text-yellow-500" />,
      title: "Equivalence Certificate",
      description:
        "IBCC equivalence certificate for O/A Level or foreign qualification holders.",
      details: "Required for international students",
    },
  ];

  const checklist = [
    "All documents must be clear and readable",
    "Attestation by relevant authority is required",
    "Documents must be in English or Urdu",
    "Original documents may be required for verification",
    "Keep scanned copies ready for online submission",
    "Carry original documents to the campus for verification",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/help/process"
            className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2"
          >
            ← Back to Complaint Process
          </Link>
          <Link
            to="/help"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition flex items-center gap-2"
          >
            Back to Help
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <FaFolderOpen className="text-6xl text-yellow-500" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Required <span className="text-yellow-600">Documents</span>
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Complete list of documents needed for various university
                processes
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-yellow-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-yellow-400"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{doc.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {doc.description}
                    </p>
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      {doc.details}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📋 Document Checklist
            </h2>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              📌 Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                • All documents must be submitted in the required format
                (PDF/JPG)
              </li>
              <li>• Make sure documents are clear and readable</li>
              <li>• Keep original documents for on-campus verification</li>
              <li>• Submit documents before the deadline to avoid delays</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredDocuments;
