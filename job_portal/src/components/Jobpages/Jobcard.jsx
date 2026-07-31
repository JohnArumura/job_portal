// import React from 'react'
import {
  FaStar,
  FaRegBookmark,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Jobcard = ({job, onSelect}) => {
  return (
    <div
    onClick={() => onSelect(job)}
    className="cursor-pointer bg-white rounded-xl shadow">
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex justify-between items-start">

      {/* Left Section */}
      <div className="flex-1">

        {/* Job Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          {job.title}
        </h2>

        {/* Company */}
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <span className="font-semibold">{job.company}</span>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500 text-sm" />
            <span>3.7</span>
          </div>

          <span>|</span>

          <span>1170 Reviews</span>
        </div>

        {/* Experience & Location */}
        <div className="flex gap-8 mt-4 text-gray-600">

          <div className="flex items-center gap-2">
            <FaBriefcase />
            <span>{job.experience}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{job.location}</span>
          </div>

        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 line-clamp-2">
          {job.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm text-gray-500"
            >
              {skill}
              {index !== job.skills.length - 1 && " • "}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">

          <span className="text-sm text-gray-500">
            {job.post_date} ago
          </span>

          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FaRegBookmark />
            Save
          </button>

        </div>

      </div>

      {/* Right Section */}
      <div className="ml-6">
        <img
          src={
            job.img ||
            "https://via.placeholder.com/70x70.png?text=Logo"
          }
          alt="Company Logo"
          className="w-16 h-16 rounded-xl border object-contain"
        />
      </div>
    </div>
    </div>
  )
}

export default Jobcard