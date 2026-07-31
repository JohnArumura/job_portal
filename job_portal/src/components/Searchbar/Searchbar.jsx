import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sed = () => {
  return (
    <div className="w-[800px] px-4">
      <div
        className="
          w-full max-w-5xl mx-auto
          bg-white/40
          backdrop-blur-md
          rounded-2xl
          shadow-xl
          border border-purple-600
           p-1
          flex flex-col
          lg:flex-row
          gap-4
          items-center
        "
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 w-full lg:flex-1">
          <FaSearch className="text-gray-600" />

          <input
            type="text"
            placeholder="Search Job"
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-10 w-px bg-gray-300"></div>

        {/* Experience */}
        <select
          className="
            w-full
            lg:w-52
            outline-none
            bg-transparent
            border
            lg:border-none
            rounded-lg
            p-2
          "
        >
          <option>Experience</option>
          <option>1 Year</option>
          <option>3 Years</option>
          <option>5 Years</option>
          <option>10 Years</option>
        </select>

        {/* Divider */}
        <div className="hidden lg:block h-10 w-px bg-gray-300"></div>

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="
            w-full
            lg:w-48
            outline-none
            border
            lg:border-none
            rounded-lg
            p-2
            bg-transparent
          "
        />

        {/* Button */}
        <Link
          to="/jobpg"
          className="
            w-full
            lg:w-auto
            bg-purple-600
            hover:bg-purple-700
            text-white
            text-center
            py-3
            px-8
            rounded-xl
            transition
          "
        >
          Search Job
        </Link>
      </div>
    </div>
  );
};

export default Sed;