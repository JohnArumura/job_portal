import React from "react";

const Experience = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      <div className="border-l-4 border-blue-600 pl-4">
        <h3 className="font-semibold">
          {profile.experience.company}
        </h3>

        <p>{profile.experience.years}</p>
      </div>
    </div>
  );
};

export default Experience;