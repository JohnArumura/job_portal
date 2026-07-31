import React from "react";

const Education = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>

      <div className="border-l-4 border-purple-600 pl-4">
        <h3 className="font-semibold">
          {profile.education.degree}
        </h3>

        <p>{profile.education.college}</p>

        <p>{profile.education.year}</p>
      </div>
    </div>
  );
};

export default Education;