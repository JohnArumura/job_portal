import React from "react";

const SavedJobs = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        Saved Jobs
      </h2>

      <ul className="space-y-3">
        {profile.savedJobs.map((job, index) => (
          <li
            key={index}
            className="border p-3 rounded-lg"
          >
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobs;