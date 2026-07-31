import React from "react";
import { Link } from "react-router-dom";

const EmployerSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-purple-800 text-white p-6">
      <nav className="flex flex-col gap-5">
        <Link to="#">
          Dashboard
        </Link>
        <Link to="#">
          Post a Job
        </Link>
        <Link to="#">
          My Jobs
        </Link>
        <Link to="#">
          Applicants
        </Link>
        <Link to="#">
          Shortlisted
        </Link>
        <Link to="#">
          Company Profile
        </Link>
        <Link to="#">
          Settings
        </Link>
      </nav>
    </div>
  );

};


export default EmployerSidebar;