import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const formSubmited = async (e) => {
    e.preventDefault();
    // check passwrod match or not
    if (password !== cPassword) {
      alert("password is not match!");
      return;
    }
    // Password validation - MUST match backend
    if (password.length < 8 || password.length > 72) {
      alert("Password must be between 8 and 72 characters");
      return;
    }
    //  password validation
    const passwordValidation =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;
    if (!passwordValidation.test(password)) {
      alert(
        "Password must contain uppercase, lowercase, number and special character",
      );
      return;
    }

    // Email validation
    if (!email.endsWith("@gmail.com")) {
      alert("Only Gmail addresses are allowed");
      return;
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      alert("Name must be between 3 and 50 characters");
      return;
    }

    const data = {
      name,
      email,
      password,
      phone,
    };
    console.log(data);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (response.status === 409) {
        alert("Email already exists. Please sign in.");
        navigate("/logIn");
        return;
      }

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.log("404s", error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 mt-2">
            Register to access the complaint system
          </p>
        </div>

        <form className="space-y-5" onSubmit={formSubmited}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create a password (min 8 characters)"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Create Account
            <FaArrowRight />
          </button>
          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link
              to="/logIn"
              className="text-green-600 hover:text-green-700 font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
