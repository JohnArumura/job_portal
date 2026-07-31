import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPen,
} from "react-icons/fa6";

const ProfileHeader = ({ profile }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      {/* Cover Banner */}
      <div className="h-52 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600"></div>

      {/* Profile Section */}
      <div className="px-10 pb-8">

        <div className="flex justify-between items-end">

          {/* Left Side */}
          <div className="flex gap-6 items-end">

            {/* Profile Image */}
            <img
              src={profile.image}
              alt={profile.name}
              className="w-40 h-40 rounded-full border-4 border-white object-cover -mt-20 shadow-lg"
            />

            {/* User Info */}
            <div className="pb-3">

              <h1 className="text-4xl font-bold">
                {profile.name}
              </h1>

              <p className="text-lg text-gray-600 mt-1">
                {profile.role}
              </p>

              <div className="flex flex-wrap gap-5 mt-4 text-gray-600">

                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  {profile.email}
                </div>

                <div className="flex items-center gap-2">
                  <FaPhone />
                  {profile.phone}
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  {profile.location}
                </div>

              </div>

              {/* Status */}
              <div className="mt-4">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ● Open to Work
                </span>
              </div>

            </div>

          </div>

          {/* Edit Button */}
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition">
            <FaPen />
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProfileHeader;