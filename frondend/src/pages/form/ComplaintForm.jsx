import React, { useState } from "react";

const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({
    title: "",
    category: "",
    department: "",
    against: "",
    location: "",
    description: "",
    file: null,
  });

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setComplaintData({
        ...complaintData,
        file: files[0],
      });
    } else {
      setComplaintData({
        ...complaintData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("title", complaintData.title);
      formdata.append("category", complaintData.category);
      formdata.append("department", complaintData.department);
      formdata.append("against", complaintData.against);
      formdata.append("location", complaintData.location);
      formdata.append("description", complaintData.description);

      if (complaintData.file) {
        formdata.append("file", complaintData.file);
      }
      const response = await fetch("http://localhost:5000/complaints", {
        method: "POST",
        credentials: "include",
        body: formdata,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message);
      }
      handleReset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReset = () => {
    setComplaintData({
      title: "",
      category: "",
      department: "",
      against: "",
      location: "",
      description: "",
      file: null,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 relative">
        {/* Back Button */}
        <button
          type="button"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform duration-200">
            ←
          </span>

          <span className="font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mt-2 mb-8">
          <div className="flex justify-center items-center gap-3 mb-2">
            <span className="text-4xl text-green-700">🏛️</span>

            <h1 className="text-3xl font-bold text-green-700">
              The Islamia University
            </h1>
          </div>

          <p className="text-sm text-gray-500 -mt-1">of Bahawalpur</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            Submit Complaint
          </h2>

          <p className="text-sm text-gray-500">Fill in the details below</p>
        </div>

        {/* Complaint Form */}
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="space-y-5"
        >
          {/* Complaint Title */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Complaint Title
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="title"
              value={complaintData.title}
              onChange={handleOnChange}
              placeholder="Enter a brief complaint title"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category / Department / Against */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Category
                <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                value={complaintData.category}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                <option value="">Select Category</option>

                <option value="Academic Issues">Academic Issues</option>

                <option value="Teacher/Professor Complaint">
                  Teacher/Professor Complaint
                </option>

                <option value="Examination Related">Examination Related</option>

                <option value="Fee/Financial Issue">Fee/Financial Issue</option>

                <option value="Library Services">Library Services</option>

                <option value="Hostel Accommodation">
                  Hostel Accommodation
                </option>

                <option value="Transport Services">Transport Services</option>

                <option value="IT/Technology Services">
                  IT/Technology Services
                </option>

                <option value="Campus Facilities">Campus Facilities</option>

                <option value="Administrative Issue">
                  Administrative Issue
                </option>

                <option value="Harassment/Bullying">Harassment/Bullying</option>

                <option value="Discrimination">Discrimination</option>

                <option value="Student Affairs">Student Affairs</option>

                <option value="Scholarship/Financial Aid">
                  Scholarship/Financial Aid
                </option>

                <option value="Research Related">Research Related</option>

                <option value="Sports & Recreation">Sports & Recreation</option>

                <option value="Canteen/Food Services">
                  Canteen/Food Services
                </option>

                <option value="Security Issues">Security Issues</option>

                <option value="Parking Facilities">Parking Facilities</option>

                <option value="Building Maintenance">
                  Building Maintenance
                </option>

                <option value="Classroom Facilities">
                  Classroom Facilities
                </option>

                <option value="Laboratory Equipment">
                  Laboratory Equipment
                </option>

                <option value="Internet/WiFi Issues">
                  Internet/WiFi Issues
                </option>

                <option value="Student Union Issues">
                  Student Union Issues
                </option>

                <option value="Other">Other</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Department
                <span className="text-red-500">*</span>
              </label>

              <select
                name="department"
                value={complaintData.department}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                <option value="">Select Department</option>

                <option value="Faculty of Arts">Faculty of Arts</option>

                <option value="Faculty of Sciences">Faculty of Sciences</option>

                <option value="Faculty of Engineering">
                  Faculty of Engineering
                </option>

                <option value="Faculty of Law">Faculty of Law</option>

                <option value="Faculty of Islamic Studies">
                  Faculty of Islamic Studies
                </option>

                <option value="Faculty of Business Administration">
                  Faculty of Business Administration
                </option>

                <option value="Faculty of Social Sciences">
                  Faculty of Social Sciences
                </option>

                <option value="Department of Computer Science">
                  Department of Computer Science
                </option>

                <option value="Department of Mathematics">
                  Department of Mathematics
                </option>

                <option value="Department of Physics">
                  Department of Physics
                </option>

                <option value="Department of Chemistry">
                  Department of Chemistry
                </option>

                <option value="Department of Biology">
                  Department of Biology
                </option>

                <option value="Department of English">
                  Department of English
                </option>

                <option value="Department of Economics">
                  Department of Economics
                </option>

                <option value="Department of Psychology">
                  Department of Psychology
                </option>

                <option value="Department of Education">
                  Department of Education
                </option>

                <option value="Department of Environmental Sciences">
                  Department of Environmental Sciences
                </option>

                <option value="Department of Political Science">
                  Department of Political Science
                </option>

                <option value="Department of Sociology">
                  Department of Sociology
                </option>

                <option value="Department of History">
                  Department of History
                </option>

                <option value="Department of Media Studies">
                  Department of Media Studies
                </option>

                <option value="Department of Fine Arts">
                  Department of Fine Arts
                </option>

                <option value="Department of Management Sciences">
                  Department of Management Sciences
                </option>

                <option value="Department of Commerce">
                  Department of Commerce
                </option>

                <option value="Department of Statistics">
                  Department of Statistics
                </option>

                <option value="Department of Geography">
                  Department of Geography
                </option>

                <option value="Department of International Relations">
                  Department of International Relations
                </option>

                <option value="Department of Philosophy">
                  Department of Philosophy
                </option>

                <option value="Department of Library Science">
                  Department of Library Science
                </option>

                <option value="Department of Physical Education">
                  Department of Physical Education
                </option>
              </select>
            </div>

            {/* Against */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Against
                <span className="text-red-500">*</span>
              </label>

              <select
                name="against"
                value={complaintData.against}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
              >
                <option value="">Select</option>

                <option value="Teacher/Professor">Teacher/Professor</option>

                <option value="Department Head">Department Head</option>

                <option value="Administrative Staff">
                  Administrative Staff
                </option>

                <option value="Support Staff">Support Staff</option>

                <option value="Security Staff">Security Staff</option>

                <option value="Student">Student</option>

                <option value="Student Group">Student Group</option>

                <option value="Department">Department</option>

                <option value="Administration">Administration</option>

                <option value="University Policy">University Policy</option>

                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Campus Location
              <span className="text-gray-400 text-sm ml-1">(Optional)</span>
            </label>

            <select
              name="location"
              value={complaintData.location}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option value="">Select Location</option>

              <option value="Main Campus - Bahawalpur">
                Main Campus - Bahawalpur
              </option>

              <option value="City Campus - Bahawalpur">
                City Campus - Bahawalpur
              </option>

              <option value="Baghdad-ul-Jadeed Campus">
                Baghdad-ul-Jadeed Campus
              </option>

              <option value="Khairpur Campus">Khairpur Campus</option>

              <option value="Rahim Yar Khan Campus">
                Rahim Yar Khan Campus
              </option>

              <option value="Office of the Vice Chancellor">
                Office of the Vice Chancellor
              </option>

              <option value="Dean's Office">Dean's Office</option>

              <option value="Department Office">Department Office</option>

              <option value="Administrative Block">Administrative Block</option>

              <option value="Academic Block">Academic Block</option>

              <option value="Hostel Area">Hostel Area</option>

              <option value="Library Building">Library Building</option>

              <option value="Sports Complex">Sports Complex</option>

              <option value="Cafeteria">Cafeteria</option>

              <option value="IT Center">IT Center</option>

              <option value="Research Center">Research Center</option>

              <option value="Medical Center">Medical Center</option>

              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Description
              <span className="text-red-500">*</span>
            </label>

            <textarea
              name="description"
              value={complaintData.description}
              onChange={handleOnChange}
              rows="6"
              placeholder="Provide detailed description of your complaint..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-y"
            />

            <p className="text-xs text-gray-400 mt-1">
              Minimum 20 characters recommended
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Upload Evidence
              <span className="text-gray-400 text-sm ml-1">(Optional)</span>
            </label>

            <input
              type="file"
              name="file"
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
            />

            <p className="text-xs text-gray-400 mt-1">
              Supported formats: PDF, JPG, PNG, DOC (Max 5MB)
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="reset"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-all duration-200"
            >
              ↻ Reset
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 text-white font-medium transition-all duration-200"
            >
              ➤ Submit Complaint
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>© 2026 The Islamia University of Bahawalpur</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
