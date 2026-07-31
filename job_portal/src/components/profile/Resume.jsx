import React from "react";

const Resume = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        Resume
      </h2>

      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
        Download Resume
      </button>

      <button className="w-full mt-4 border border-purple-600 text-purple-600 hover:bg-purple-50 py-3 rounded-lg">
        Edit Profile
      </button>
    </div>
  );
};

export default Resume;