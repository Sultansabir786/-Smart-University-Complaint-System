import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/me", {
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
            <FaShieldAlt />
          </div>

          {/* Spinner */}
          <div className="mt-6 flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
          </div>

          {/* Text */}
          <h2 className="mt-5 text-lg font-semibold text-slate-800">
            Checking Authentication
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Please wait while we verify your account...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  // Authenticated
  return <Outlet />;
};

export default ProtectedRoute;
