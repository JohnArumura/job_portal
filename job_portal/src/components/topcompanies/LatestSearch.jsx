import React from "react";
import { FaSearch } from "react-icons/fa";

const latestSearches = [
  {
    id: 1,
    title: "React Developer",
    location: "Hyderabad",
    time: "Today",
  },
  {
    id: 2,
    title: "Python Developer",
    location: "Bengaluru",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    time: "2 days ago",
  },
  {
    id: 4,
    title: "Java Developer",
    location: "Pune",
    time: "3 days ago",
  },
];

const LatestSearch = () => {
  return (
    <div className="w-full py-10 mt-12 bg-gradient-to-b from-white to-purple-50">

      <div className="flex justify-between items-center px-8 mb-6">
        <h2 className="text-3xl font-bold">
          Latest Searches
        </h2>

        <button className="text-purple-600 font-semibold hover:underline">
          Clear All
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto hide-scrollbar px-8 pb-5">

        {latestSearches.map((item) => (
          <div
            key={item.id}
            className="min-w-[340px] h-[100px] bg-white rounded-xl shadow hover:shadow-lg transition flex justify-between items-center px-5 cursor-pointer"
          >
            <div className="flex gap-5 items-center">

              <div className="w-12 h-12 rounded-full bg-purple-100 flex justify-center items-center">
                <FaSearch className="text-purple-600" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Last searched: {item.time}
                </p>

                <p className="text-xs text-gray-400">
                  {item.location}
                </p>
              </div>

            </div>

            <button className="text-purple-600 text-sm font-semibold hover:underline">
              Search Again
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LatestSearch;