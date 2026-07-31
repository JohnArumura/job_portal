import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  googleProvider,
} from '../firebase'

import login1 from "../assets/login1.svg";

const EmployerLogin = () => {
  const navigate = useNavigate();

  // Google Login
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log(result.user);

      alert("Google Login Successful");

      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // GitHub Login
  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      console.log(result.user);

      alert("GitHub Login Successful");

      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(120deg,#F3E8FF 0%,#D8B4FE 30%,#A78BFA 60%,#6D5BD0 80%,#433870 100%)",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl max-w-5xl w-full grid grid-cols-2 overflow-hidden">

        {/* Left Side */}

        <div className="flex  flex-col justify-center items-center p-10">
          <img
            src={login1}
            alt="Login"
            className="w-96"
          />
        </div>

        {/* Right Side */}

        <div className="p-10 flex flex-col justify-center">

           <h1 className="text-4xl font-bold">
            Welcome
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            
          </p>

          {/* Email */}

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password */}

          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Forgot Password */}

          <div className="flex justify-end mt-2 mb-5">

            <Link
              to="/forgotpassword"
              className="text-purple-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login */}

          <Link
  to="/employerdashboard"
  className="bg-purple-600 hover:bg-purple-700 flex justify-center items-center text-white rounded-lg p-3 font-semibold transition duration-300"
>
  Login
</Link>

          {/* Divider */}
          <div className="flex items-center my-8">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-400">
              OR
            </span>
            <hr className="flex-1" />
          </div>
          {/* Social Login */}
          <div className="flex justify-center gap-8">
            {/* Google */}
            <div className="text-center">
              <button
                onClick={googleLogin}
                className="w-16 h-16 border rounded-xl flex justify-center items-center hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-8"
                />
              </button>
              <p className="mt-2 text-sm">
                Google
              </p>
            </div>
            {/* Apple */}
            <div className="text-center">
              <button
                className="w-16 h-16 border rounded-xl flex justify-center items-center hover:bg-gray-100 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                  alt="Apple"
                  className="w-8"
                />
              </button>

              <p className="mt-2 text-sm">
                Apple
              </p>

            </div>

            

          </div>

          {/* Register */}
          <div className="text-center mt-8">
            <span className="text-gray-600">
              New User?
            </span>
            <Link
              to="/employerregester"
              className="ml-2 text-purple-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default EmployerLogin;