import React from 'react'
import { Link } from 'react-router-dom'

const Servicemenu = () => {
  return (
    <div>
      <div className='relative group'>
                                <Link to="/" className="relative pb-1 text-gray-400 hover:text-black duration:300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Services</Link>
                                  <div className='absolute left-[-60px] top-full mt-8 w-[700px] pb-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                                    <div className='flex flex-col'>
                                      <div className='flex flex-row justify-evenly'>
                                          <div className='flex flex-col'>
                                              <div className='flex flex-col items-start gap-2'>
                                              <h3 className='font-bold'>Resume Writing</h3>
                                              <Link to="/">Text Resume</Link>
                                              <Link to="/">Visual Resume</Link>
                                              <Link to="/">Resume Critique</Link>
                                              </div>
                                              <div className='flex flex-col items-start gap-2'>
                                                <h3 className='font-bold'>Find Jobs</h3>
                                                <Link to="/">Job 4u</Link>
                                                <Link to="/">Priority applicant</Link>
                                                <Link to="/">About us</Link>
                                              </div>
                                          </div>
                                          <div>
                                            <div className='flex flex-col items-start gap-2'>
                                                <h3 className='font-bold'>Get recruiter's attention</h3>
                                                <Link to="/">Resume Display</Link>
                                            </div>
                                          </div>
                                          <div className='flex flex-col items-start gap-2'>
                                            <h3 className='font-bold'>Get recruiter's attention</h3>
                                            <Link to="/">Resume maker</Link>
                                            <Link to="/">Resume quality score</Link>
                                            <Link to="/">Resume samples</Link>
                                            <Link to="/">job letter samples</Link>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
    </div>
  )
}

export default Servicemenu
