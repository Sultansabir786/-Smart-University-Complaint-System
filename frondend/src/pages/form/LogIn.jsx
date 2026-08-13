import React, { useState } from "react";
import logo from "../../assets/iub.png";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigation("/dashboard");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img src={logo} alt="IUB Logo" className="w-24" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-green-700">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          University Complaint Management System
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">University Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="student@gmail.com"
              className="w-full border rounded-lg p-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="w-full border rounded-lg p-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div> */}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </button>
          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-500">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Register */}
          <Link
            to="/signup"
            className="block w-full text-center border border-green-700 text-green-700 py-3 rounded-lg hover:bg-green-700 hover:text-white transition"
          >
            Create New Account
          </Link>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-8">
            © 2026 The Islamia University of Bahawalpur
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
