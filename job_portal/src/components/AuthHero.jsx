import React from "react";
import { Link } from "react-router-dom";
import {FaArrowRight} from'react-icons/fa'

const AuthHero = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center h-screen p-12">
      {/* Logo */}
      {/* <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8">
        <span className="text-4xl">💼</span>
      </div> */}
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-purple-600 text-center">
        CareerLink
      </h1>
      {/* Sub Heading */}
      <h2 className="text-3xl font-semibold text-gray-700 mt-6 text-center">
        Recruit Top Talent      
        </h2>
      {/* Description */}
      <p className="text-gray-600 text-lg mt-6 text-center leading-8 max-w-lg">
        Empower your business with the right people. Discover, connect, and hire exceptional talent effortlessly.
      </p>
      {/* Button */}
      <Link
        to="/emplogin"
        className=" mt-10 px-10 py-4 flex items-center justify-center w-xs gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-xl font-bold outline-none">
        Get Started
        <FaArrowRight />
            </Link>
    </div>
  );
};

export default AuthHero;