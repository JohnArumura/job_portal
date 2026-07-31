import {Link} from 'react-router-dom'
import React from 'react'

const Jobfilter = ({applied}) => {
  return (
    <div>
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Experience */}
      <div className="border-b pb-5 mb-5">
        <h3 className="font-semibold mb-3">Experience</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="exp" />
            Fresher
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="exp" />
            1-3 Years
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="exp" />
            3-5 Years
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="exp" />
            5+ Years
          </label>
        </div>
      </div>

      {/* Job Type */}
      <div className="border-b pb-5 mb-5">
        <h3 className="font-semibold mb-3">Job Type</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Full Time
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Part Time
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Internship
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remote
          </label>
        </div>
      </div>

      {/* Salary */}
      <div className="border-b pb-5 mb-5">
        <h3 className="font-semibold mb-3">Salary</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="salary" />
            30k - 50k
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="salary" />
            50k - 80k
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="salary" />
            80k+
          </label>
        </div>
      </div>

      {/* Location */}
      <div className="border-b pb-5 mb-5">
        <h3 className="font-semibold mb-3">Location</h3>

        <input
          type="text"
          placeholder="Search Location"
          className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Skills</h3>

        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            React
          </span>

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            JavaScript
          </span>

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Node.js
          </span>

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Python
          </span>
        </div>
      </div>

      {/* Buttons */}
      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold">
        Apply Filters
      </button>
</div>
    </div>
  )
}

export default Jobfilter;
