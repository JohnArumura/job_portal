import React from "react";
import popularJobs from './data/PropularJobs'

const popularSearches = [
  "React Developer",
  "Python Developer",
  "Java Developer",
  "UI/UX Designer",
  "Data Analyst",
];

const PopularSearches = () => {
  return (
     <div className="w-full py-10 bg-purple-50">

      <h2 className="text-3xl font-bold mb-6 ms-10">
        Popular Searches
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-3 hide-scrollbar">

        {popularJobs.map((job) => (

          <div
            key={job.id}
            className="min-w-[320px] h-[100px] bg-white rounded-xl shadow-md
            hover:shadow-lg flex items-center p-4 flex-shrink-0 cursor-pointer"
          >

            <img
              src={job.logo}
              alt={job.company}
              className="w-14 h-14 rounded-lg border"
            />

            <div className="ml-4">

              <h3 className="font-semibold text-lg">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500">
                {job.company}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularSearches;