import React, { useEffect, useState } from "react";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error("Error fetching profile information", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 px-6 h-24 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">ข้อมูลส่วนตัว</h2>
          </div>

          {/* Profile Content */}
          <div className="px-6 py-8">
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">ชื่อ</h3>
                  <p className="text-gray-500">{profileInfo.name || "-"}</p>
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-gray-900">อีเมล</h3>
                <p className="mt-1 text-gray-500">{profileInfo.email || "-"}</p>
              </div>

              {/* City */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-gray-900">เมือง</h3>
                <p className="mt-1 text-gray-500">{profileInfo.city || "-"}</p>
              </div>

              {/* Role */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-gray-900">บทบาท</h3>
                <p className="mt-1">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      profileInfo.role === "ADMIN"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {profileInfo.role || "-"}
                  </span>
                </p>
              </div>

              {/* Update Button */}
              {profileInfo.role === "ADMIN" && (
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    to={`/update-user/${profileInfo.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    แก้ไขข้อมูลส่วนตัว
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
