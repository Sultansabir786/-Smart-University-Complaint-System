import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        const data = await response.json();

        if (response.ok && data.loggedIn) {
          setUser(data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) {
    return (
      <div className="w-9 h-9 rounded-full bg-gray-700 animate-pulse"></div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);

        navigate("/login");
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const firstLetter = user.name?.charAt(0).toUpperCase();

  return (
    <div className="relative group">
      {/* User Button */}
      <button
        type="button"
        className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
      >
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-sm">
          {firstLetter}
        </div>

        {/* Name */}
        <span className="hidden xl:block text-sm font-medium">{user.name}</span>

        <FaChevronDown className="w-3 h-3" />
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
        {/* User Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-5">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xl">
              {firstLetter}
            </div>

            <div className="min-w-0">
              <p className="font-bold text-white text-base truncate">
                {user.name}
              </p>

              <p className="text-xs text-gray-300 mt-1 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="px-4 py-4 space-y-3">
          {/* Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center">
              <FaUser className="text-sm" />
            </div>

            <div>
              <p className="text-[11px] text-gray-400 uppercase font-semibold">
                Name
              </p>

              <p className="text-sm font-medium text-gray-700">{user.name}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FaEnvelope className="text-sm" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] text-gray-400 uppercase font-semibold">
                Email
              </p>

              <p className="text-sm text-gray-700 truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="border-t border-gray-100 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
