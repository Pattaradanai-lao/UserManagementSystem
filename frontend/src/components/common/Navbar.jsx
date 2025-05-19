import React from "react";
import UserService from "../service/UserService";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();
  const navigate = useNavigate()

  const handleLogout = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user ?"
    );
    if (confirmDelete) {
      UserService.logout();
      navigate("/")
    }
  };
  return (
    <div className="bg-gradient-to-r bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-16">
          <div className="flex items-center ">
            {!isAuthenticated && (
              <Link
                to="/"
                className="text-xl font-bold text-white"
              >
                User Management System
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <Link
                to="/profile"
                className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/admin/user-management"
                className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                User Management
              </Link>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
