import React from "react";

const About = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>

      <p className="text-gray-600 leading-7">
        {profile.about}
      </p>
    </div>
  );
};

export default About;