import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

import states from "../data/states/states";
import districts from "../data/states/districts";

import bgimg from "../assets/bgimg.png";
import undrawjoinniai from "../assets/undrawjoinniai.svg";

const qualifications = [
  "10th",
  "12th",
  "Diploma",
  "BCA",
  "B.Tech",
  "B.Sc",
  "B.Com",
  "BBA",
  "MCA",
  "MBA",
  "M.Tech",
  "M.Sc",
  "Other",
];

const experiences = [
  "Fresher",
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5-10 Years",
  "10+ Years",
];

const Registration = () => {

  const googleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      alert("Google Sign Up Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    qualification: "",
    college: "",
    passingYear: "",
    experience: "",
    preferredRole: "",
    skills: "",
    expectedSalary: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredStates = Object.keys(states).filter((state) =>
    state.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex h-screen sticky top-0 bg-purple-100 items-center justify-center p-10">

          <div className="text-center">

            <img
              src={undrawjoinniai}
              alt="Registration"
              className="w-80 max-w-lg mx-auto"
            />

            <h1 className="text-5xl font-bold mt-8 text-purple-800">
              Find Your Dream Job
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              Create your professional profile, upload your resume,
              and apply for thousands of verified jobs across India.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="h-screen overflow-y-auto bg-purple-50">

          <div className="flex justify-center py-10 px-5">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl p-8">

              {/* Progress */}

              <div className="flex justify-between items-center mb-10">

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
                    1
                  </div>
                  <span className="text-xs mt-2">
                    Personal
                  </span>
                </div>

                <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    2
                  </div>
                  <span className="text-xs mt-2">
                    Education
                  </span>
                </div>

                <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    3
                  </div>
                  <span className="text-xs mt-2">
                    Location
                  </span>
                </div>

                <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    4
                  </div>
                  <span className="text-xs mt-2">
                    Account
                  </span>
                </div>

              </div>

              <h1 className="text-3xl font-bold text-center text-purple-700">
                Job Seeker Registration
              </h1>

              <p className="text-center text-gray-500 mt-3 mb-8">
                Create your account and start applying for jobs.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              > 
              {/* Full Name */}

<div>
  <label className="block mb-2 font-semibold">
    Full Name
  </label>

  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="John Doe"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
    required
  />
</div>

{/* Email */}

<div>
  <label className="block mb-2 font-semibold">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="john@gmail.com"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
    required
  />
</div>

{/* Phone */}

<div>
  <label className="block mb-2 font-semibold">
    Mobile Number
  </label>

  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="+91 9876543210"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
    required
  />
</div>

{/* Date of Birth */}

<div>
  <label className="block mb-2 font-semibold">
    Date of Birth
  </label>

  <input 
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleChange} id="age"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>

{/* Gender */}

<div>
  <label className="block mb-2 font-semibold">
    Gender
  </label>

  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  >
    <option value="">Select Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
</div>

{/* Qualification */}

<div>
  <label className="block mb-2 font-semibold">
    Highest Qualification
  </label>

  <select
    name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  >
    <option value="">Select Qualification</option>

    {qualifications.map((item) => (
      <option key={item}>
        {item}
      </option>
    ))}
  </select>
</div>

{/* College */}

<div className="md:col-span-2">
  <label className="block mb-2 font-semibold">
    College / University
  </label>

  <input
    type="text"
    name="college"
    value={formData.college}
    onChange={handleChange}
    placeholder="XYZ University"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>

{/* Passing Year */}

<div>
  <label className="block mb-2 font-semibold">
    Passing Year
  </label>

  <input
    type="number"
    name="passingYear"
    value={formData.passingYear}
    onChange={handleChange}
    placeholder="2027"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>

{/* Experience */}

<div>
  <label className="block mb-2 font-semibold">
    Experience
  </label>

  <select
    name="experience"
    value={formData.experience}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  >
    <option value="">Select Experience</option>

    {experiences.map((item) => (
      <option key={item}>
        {item}
      </option>
    ))}
  </select>
</div>

{/* Preferred Role */}

<div className="md:col-span-2">
  <label className="block mb-2 font-semibold">
    Preferred Job Role
  </label>

  <input
    type="text"
    name="preferredRole"
    value={formData.preferredRole}
    onChange={handleChange}
    placeholder="Frontend Developer"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>
{/* Skills */}

<div className="md:col-span-2">
  <label className="block mb-2 font-semibold">
    Skills
  </label>

  <input
    type="text"
    name="skills"
    value={formData.skills}
    onChange={handleChange}
    placeholder="React, JavaScript, Python, SQL..."
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>

{/* Expected Salary */}

<div>
  <label className="block mb-2 font-semibold">
    Expected Salary
  </label>

  <input
    type="text"
    name="expectedSalary"
    value={formData.expectedSalary}
    onChange={handleChange}
    placeholder="₹5 LPA"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />
</div>

{/* State */}

<div className="relative">

  <label className="block mb-2 font-semibold">
    State
  </label>

  <input
    type="text"
    placeholder="Search State"
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setShowSuggestions(true);
    }}
    onFocus={() => setShowSuggestions(true)}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />

  {showSuggestions && search && (

    <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto z-50">

      {filteredStates.map((state) => (

        <div
          key={state}
          className="p-3 hover:bg-purple-100 cursor-pointer"
          onClick={() => {
            setSearch(state);

            setFormData({
              ...formData,
              state: state,
              district: "",
            });

            setShowSuggestions(false);
          }}
        >

          {state}

        </div>

      ))}

    </div>

  )}

</div>

{/* District */}

<div>

  <label className="block mb-2 font-semibold">
    District
  </label>

  <select
    name="district"
    value={formData.district}
    onChange={handleChange}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  >

    <option value="">Select District</option>

    {formData.state &&
      districts[formData.state]?.map((district) => (
        <option
          key={district}
          value={district}
        >
          {district}
        </option>
      ))}

  </select>

</div>

{/* City */}

<div>

  <label className="block mb-2 font-semibold">
    City
  </label>

  <input
    type="text"
    name="city"
    value={formData.city}
    onChange={handleChange}
    placeholder="Enter City"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />

</div>

{/* Pincode */}

<div>

  <label className="block mb-2 font-semibold">
    Pincode
  </label>

  <input
    type="text"
    name="pincode"
    value={formData.pincode}
    onChange={handleChange}
    placeholder="431605"
    maxLength={6}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />

</div>

{/* Resume Upload */}

<div className="md:col-span-2">

  <label className="block mb-2 font-semibold">
    Upload Resume
  </label>

  <input
    type="file"
    accept=".pdf,.doc,.docx"
    className="w-full border rounded-lg p-3"
  />

  <p className="text-xs text-gray-500 mt-2">
    PDF, DOC and DOCX files only
  </p>

</div>

{/* Profile Photo */}

<div className="md:col-span-2">

  <label className="block mb-2 font-semibold">
    Upload Profile Photo
  </label>

  <input
    type="file"
    accept="image/*"
    className="w-full border rounded-lg p-3"
  />

  <p className="text-xs text-gray-500 mt-2">
    JPG, PNG or JPEG image
  </p>

</div>
{/* Password */}

<div>
  <label className="block mb-2 font-semibold">
    Password
  </label>

  <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Enter Password"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
    required
  />
</div>

{/* Confirm Password */}

<div>
  <label className="block mb-2 font-semibold">
    Confirm Password
  </label>

  <input
    type="password"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm Password"
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
    required
  />
</div>

{/* Terms & Conditions */}

<div className="md:col-span-2 flex items-center gap-3 mt-2">

  <input
    type="checkbox"
    required
    className="w-4 h-4"
  />

  <span className="text-sm text-gray-600">
    I agree to the Terms & Conditions and Privacy Policy.
  </span>

</div>

{/* Divider */}

<div className="md:col-span-2 flex items-center my-4">

  <hr className="flex-1" />

  <span className="mx-3 text-gray-400 font-medium">
    OR SIGN UP WITH
  </span>

  <hr className="flex-1" />

</div>

{/* Social Buttons */}

<div className="md:col-span-2 flex justify-center gap-5 flex-wrap">

  {/* Google */}

  <button
    type="button"
    onClick={googleSignup}
    className="border rounded-xl p-3 hover:bg-gray-100 transition shadow-sm"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-8 h-8"
    />
  </button>

  {/* Apple */}

  <button
    type="button"
    onClick={() => alert("Apple Sign In Coming Soon")}
    className="border rounded-xl p-3 hover:bg-gray-100 transition shadow-sm"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/0/747.png"
      alt="Apple"
      className="w-8 h-8"
    />
  </button>

  {/* GitHub */}

  <button
    type="button"
    onClick={() => alert("GitHub Sign In Coming Soon")}
    className="border rounded-xl p-3 hover:bg-gray-100 transition shadow-sm"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      alt="GitHub"
      className="w-8 h-8"
    />
  </button>

</div>

{/* Register Button */}

<div className="md:col-span-2 mt-6">

  <button
    type="submit"
    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
  >
    Create Account
  </button>

</div>

{/* Login Link */}

<div className="md:col-span-2 text-center mt-5">

  <span className="text-gray-600">
    Already have an account?
  </span>

  <Link
    to="/login"
    className="ml-2 text-purple-700 font-semibold hover:underline"
  >
    Login
  </Link>

</div>

</form>

</div>

</div>

</div>

</div>

</div>

);
};

export default Registration;