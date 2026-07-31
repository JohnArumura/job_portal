import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

      {/* Cover */}
      <div className="h-52 bg-gradient-to-r from-purple-700 to-indigo-600"></div>

      {/* Profile */}
      <div className="px-10 pb-10">

        <img
          src={profile.image}
          alt=""
          className="w-40 h-40 rounded-full border-8 border-white -mt-20"
        />

        <div className="mt-5">

          <h1 className="text-4xl font-bold">
            {profile.name}
          </h1>

          <p className="text-xl text-gray-500 mt-2">
            {profile.role}
          </p>

          <div className="mt-5 space-y-2">

            <p>📧 {profile.email}</p>

            <p>📱 {profile.phone}</p>

            <p>📍 {profile.location}</p>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              About
            </h2>

            <p className="text-gray-600 mt-3">
              {profile.about}
            </p>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              Education
            </h2>

            <div className="mt-3">

              <p className="font-semibold">
                {profile.education.degree}
              </p>

              <p>{profile.education.college}</p>

              <p>{profile.education.year}</p>

            </div>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              Experience
            </h2>

            <p className="mt-3">
              {profile.experience.company}
            </p>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

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

          <div className="mt-8 flex gap-4">

            <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700">
              Edit Profile
            </button>

            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-xl">
              Download Resume
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;