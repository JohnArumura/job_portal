import React from "react";

const Skills = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;