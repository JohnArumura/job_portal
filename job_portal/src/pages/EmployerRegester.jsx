import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"; // Change path if needed

import states from "../data/states/states";
import districts from "../data/states/districts";

import undrawbusinessdecisions7vkl from "../assets/undrawbusinessdecisions7vkl.svg";

const industries = [
  "Information Technology",
  "Software Development",
  "Artificial Intelligence",
  "Cyber Security",
  "Data Science",
  "Cloud Computing",
  "Banking",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Telecommunications",
  "Automobile",
  "Retail",
  "E-Commerce",
  "Logistics",
  "Construction",
  "Hospitality",
  "Media",
  "Digital Marketing",
  "Other",
];

const EmployerRegister = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    description: "",
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

  const handlePincode = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      pincode: value,
    });

    // Later connect pincode API here
    if (value === "500081") {
      setFormData((prev) => ({
        ...prev,
        city: "Hyderabad",
        state: "Telangana",
      }));

      setSearch("Telangana");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 items-center justify-center p-12">

          <div className="text-center">

            <img
              src={undrawbusinessdecisions7vkl}
              alt="Employer Register"
              className="w-full max-w-lg mx-auto"
            />

            <h1 className="text-4xl font-bold text-purple-800 mt-8">
              Hire the Best Talent
            </h1>

            <p className="text-gray-700 text-lg mt-5 max-w-md mx-auto leading-8">
              Create your employer account and connect with talented
              professionals across India. Post jobs, manage applicants,
              schedule interviews and grow your company.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-purple-50 flex justify-center items-center px-4 py-8">

          <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl p-6 md:p-10">

            {/* Progress Bar */}

            <div className="flex items-center justify-between mb-10">

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-xs mt-2">Company</span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-xs mt-2">Location</span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-xs mt-2">HR</span>
              </div>

              <div className="flex-1 h-1 bg-gray-300 mx-3"></div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                  4
                </div>
                <span className="text-xs mt-2">Account</span>
              </div>

            </div>

            <h1 className="text-3xl font-bold text-center text-purple-700">
              Employer Registration
            </h1>

            <p className="text-center text-gray-500 mt-3 mb-8">
              Create your employer account
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* Company Name */}

<input
  type="text"
  name="companyName"
  placeholder="Company Name"
  value={formData.companyName}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
/>

{/* Company Email */}

<input
  type="email"
  name="email"
  placeholder="Company Email"
  value={formData.email}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
/>

{/* Phone */}

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
/>

{/* Website */}

<input
  type="url"
  name="website"
  placeholder="https://company.com"
  value={formData.website}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
/>

{/* Industry */}

<select
  name="industry"
  value={formData.industry}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
>
  <option value="">Select Industry</option>

  {industries.map((industry, index) => (
    <option key={index} value={industry}>
      {industry}
    </option>
  ))}
</select>

{/* State */}

<div className="relative">

  <input
    type="text"
    placeholder="Enter State"
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setShowSuggestions(true);
    }}
    onFocus={() => setShowSuggestions(true)}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  />

  {showSuggestions && search && (

    <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg max-h-56 overflow-y-auto z-50">

      {filteredStates.length > 0 ? (

        filteredStates.map((state) => (

          <div
            key={state}
            onClick={() => {
              setSearch(state);

              setFormData({
                ...formData,
                state: state,
                district: "",
              });

              setShowSuggestions(false);
            }}
            className="p-3 hover:bg-purple-100 cursor-pointer"
          >
            {state}
          </div>

        ))

      ) : (

        <div className="p-3 text-gray-500">
          No State Found
        </div>

      )}

    </div>

  )}

</div>

{/* District */}

<select
  name="district"
  value={formData.district}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
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

{/* Pincode */}

<input
  type="text"
  name="pincode"
  placeholder="Pincode"
  maxLength={6}
  value={formData.pincode}
  onChange={handlePincode}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
/>

{/* City */}

<input
  type="text"
  value={formData.city}
  readOnly
  placeholder="City"
  className="border rounded-lg p-3 bg-gray-100"
/>

{/* Description */}

<textarea
  rows="4"
  name="description"
  placeholder="Company Description"
  value={formData.description}
  onChange={handleChange}
  className="border rounded-lg p-3 md:col-span-2 focus:ring-2 focus:ring-purple-500 outline-none"
/>

{/* Company Logo */}

<div className="md:col-span-2">

  <label className="block mb-2 font-semibold">
    Company Logo
  </label>

  <input
    type="file"
    accept="image/*"
    className="w-full border rounded-lg p-2"
  />
</div>
{/* Password */}
<input
  type="password"
  name="password"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
/>
{/* Confirm Password */}
<input
  type="password"
  name="confirmPassword"
  placeholder="Confirm Password"
  value={formData.confirmPassword}
  onChange={handleChange}
  className="border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
  required
/>
{/* Register */}
<button
  type="submit"
  className="md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-3 text-lg font-semibold transition"
>
  Register
</button>
{/* Divider */}
<div className="md:col-span-2 flex items-center my-2">
  <hr className="flex-1" />
  <span className="mx-3 text-gray-500">
    OR
  </span>
  <hr className="flex-1" />
</div>
{/* Social Login */}
<div className="md:col-span-2 flex justify-center gap-5">
  <button
    type="button"
    className="border rounded-full p-3 hover:bg-gray-100"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      className="w-7 h-7"
      alt="Google"
    />
  </button>
  <button
    type="button"
    className="border rounded-full p-3 hover:bg-gray-100"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/0/747.png"
      className="w-7 h-7"
      alt="Apple"
    />
  </button>
  <button
    type="button"
    className="border rounded-full p-3 hover:bg-gray-100"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      className="w-7 h-7"
      alt="GitHub"
    />
  </button>
</div>
{/* Login */}
<div className="md:col-span-2 flex justify-center mt-6">
  <p className="text-gray-600">
    Already have an account?
    <Link
      to="/login"
      className="ml-2 text-purple-700 font-semibold hover:underline"
    >
      Login
    </Link>
  </p>
</div>
</form>
</div>
</div>
</div>
</>

);
};

export default EmployerRegister;
