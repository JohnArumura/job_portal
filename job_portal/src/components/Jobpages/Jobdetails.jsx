import React from 'react'
import {Link} from 'react-router-dom'
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";
import { FaArrowLeftLong } from 'react-icons/fa6';

const Jobdetails = ({job, onBack}) => {
    console.log(job);
  return (
    <div className="max-w-5xl mx-auto my-8 bg-white shadow-lg rounded-2xl p-8">
      {/* Header */}
      <div className='mb-6'>
          <button onClick={onBack} className='inline-flex items-center gap-2'>
          <FaArrowLeftLong/>
          <span>Back</span>
          </button>
          
      </div>
      <div className="flex justify-between items-center border-b pb-6">
        <div>
           <h1 className="text-3xl font-bold">{job.title}</h1>

          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <FaBuilding />
            <span>{job.company}</span>
          </div>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FaBriefcase />
              <span>{job.experience}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMoneyBillWave />
              <span>{job.salary}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              <span>Posted {job.post_date} ago</span>
            </div>
          </div>
        </div>

        <img
          src={job.img}
          alt={job.company}
          className="w-24 h-24 rounded-xl border object-contain"
        />
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Required Skills</h2>

        <div className="flex flex-wrap gap-3">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          Job Description
        </h2>

        <p className="text-gray-700 leading-8">
          {job.description}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          Responsibilities
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Qualifications */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          Qualifications
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {job.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="mt-10 flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
          Apply Now
        </button>
      </div>

    </div>
  )
}

export default Jobdetails
