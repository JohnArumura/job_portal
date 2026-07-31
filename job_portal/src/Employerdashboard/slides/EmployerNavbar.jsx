import React from "react";
import { Link } from "react-router-dom";

const EmployerNavbar = () => {
  return (
    <div className="h-16 bg-white shadow flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold text-purple-800">
        CareerLink
      </h1>
      <div className="flex items-center gap-6">
        <span className="font-semibold">
          Bharat IT
        </span>
        <Link to='/' className="bg-purple-700 text-white px-4 py-2 rounded-lg">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default EmployerNavbar;