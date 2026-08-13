import React from "react";

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            GOT QUESTIONS?
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {/* Question 1 */}
          <details className="bg-white rounded-3xl shadow-md p-6 group">
            <summary className="font-semibold text-xl cursor-pointer flex justify-between items-center list-none">
              How can I submit a complaint?
              <span className="text-red-600 text-2xl group-open:hidden">+</span>
              <span className="text-red-600 text-2xl hidden group-open:block">
                ×
              </span>
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              Log in to the Complaint Management System, choose a complaint
              category, fill in the required information, attach supporting
              documents if necessary, and submit your complaint.
            </p>
          </details>

          {/* Question 2 */}
          <details className="bg-white rounded-3xl shadow-md p-6 group">
            <summary className="font-semibold text-xl cursor-pointer flex justify-between items-center list-none">
              Can I track my complaint?
              <span className="text-red-600 text-2xl group-open:hidden">+</span>
              <span className="text-red-600 text-2xl hidden group-open:block">
                ×
              </span>
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              Yes. After submitting your complaint, you can track its status
              from your dashboard using your Complaint ID.
            </p>
          </details>

          {/* Question 3 */}
          <details className="bg-white rounded-3xl shadow-md p-6 group">
            <summary className="font-semibold text-xl cursor-pointer flex justify-between items-center list-none">
              Will my complaint remain confidential?
              <span className="text-red-600 text-2xl group-open:hidden">+</span>
              <span className="text-red-600 text-2xl hidden group-open:block">
                ×
              </span>
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              Yes. Only authorized university officials can view your complaint.
              Your information remains confidential.
            </p>
          </details>

          {/* Question 4 */}
          <details className="bg-white rounded-3xl shadow-md p-6 group">
            <summary className="font-semibold text-xl cursor-pointer flex justify-between items-center list-none">
              How long does it take to resolve a complaint?
              <span className="text-red-600 text-2xl group-open:hidden">+</span>
              <span className="text-red-600 text-2xl hidden group-open:block">
                ×
              </span>
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              Most complaints are reviewed within a few working days. Complex
              complaints may require additional time depending on the
              investigation.
            </p>
          </details>

          {/* Question 5 */}
          <details className="bg-white rounded-3xl shadow-md p-6 group">
            <summary className="font-semibold text-xl cursor-pointer flex justify-between items-center list-none">
              Can I edit my complaint after submission?
              <span className="text-red-600 text-2xl group-open:hidden">+</span>
              <span className="text-red-600 text-2xl hidden group-open:block">
                ×
              </span>
            </summary>

            <p className="mt-4 text-gray-600 leading-7">
              You can edit your complaint before it is assigned to the concerned
              department. After assignment, editing is disabled.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
