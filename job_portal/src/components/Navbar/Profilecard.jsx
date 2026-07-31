import React from 'react'
import { Link } from 'react-router-dom'
import profilepic from'../../assets/profilepic.png'

const Profilecard = () => {
  return (
    <div>
      <div className="relative group">

         <img
          src={profilepic}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-purple-600 cursor-pointer"
        />
        {/* Hover Card */}
        <div
          className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl p-5
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <img
              src={profilepic}
              alt=""
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h2 className="font-bold text-lg">
                John Arumura
              </h2>
              <p className="text-gray-500">
                Software Developer
              </p>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="space-y-2 text-gray-600">
            <p>📧 john@gmail.com</p>
            <p>📍 Nanded, Maharashtra</p>
            <p>💼 Fresher</p>
            <p className="text-green-600 font-semibold">
              ● Open to Work
            </p>
          </div>
          <Link
            to="/profile"
            className="block mt-5 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
          >
             View Profile
          </Link>
          <div className='flex items-center pt-2 ms-3'>
              <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
