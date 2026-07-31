import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import homebg from '../assets/homebg.png'

const Getstarted = () => {
  return (
    <div>

      <div className="hidden lg:flex flex-col justify-center items-center h-screen p-12">
                        <h1 className='text-5xl font-extrabold text-purple-600 text-center'>CareerLink</h1>
                        <h4 className='text-3xl font-semibold text-gray-700 mt-6 text-center'>Your Sucessfull Journey <span className='text-violet-800'>Starts here</span></h4>
                        <h4 className='text-gray-600 text-lg mt-6 text-center leading-8 max-w-lg'>Sign in or create account to find your dream job</h4>
                        <Link
                            to="/login"
                            className=" mt-10 px-10 py-4 flex items-center justify-center w-xs gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-xl font-bold outline-none"
                        >
                          Get Started
                          <FaArrowRight />
                        </Link>
                    </div>
    </div>
  )
}

export default Getstarted
