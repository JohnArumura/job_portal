import React from 'react'
import { Link } from 'react-router-dom'

const Jobmenu = () => {
  return (
    <div>
      <div className='relative group'>
                            <Link to="/" className="relative pb-1 text-gray-400 hover:text-black duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Jobs</Link>
                            <div className='absolute left-[-100px] top-full mt-8 pb-5 w-[600px] pb-3 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                                  <div className='flex flex-row justify-evenly ps-6 pe-6'>
                                    <div className='flex flex-col items-start gap-2'>
                                      <h3 className='pb-2 font-bold'>Popular categories</h3>
                                      <Link to="/">IT Jobs</Link>
                                      <Link to="/">Sales Jobs</Link>
                                      <Link to="/">Marketing Jobs</Link>
                                      <Link to="/">Data Science Jobs</Link>
                                      <Link to="/">HR Jobs</Link>
                                      <Link to="/">Engineering Jobs</Link>
                                    </div>
                                    <span className='h-42 w-px bg-gradient-to-b from-transparent bg-gray-300 to-teansparent'></span>
                                    <div className='flex flex-col items-start gap-2'>
                                      <h3 className='pb-2 font-bold'>Jobs in demand</h3>
                                      <Link to="/">Freshers jobs</Link>
                                      <Link to="/">MNCs jobs</Link>
                                      <Link to="/">Work from Home jobs</Link>
                                      <Link to="/">Remote jobs</Link>
                                      <Link to="/">Part-time jobs</Link>
                                      <Link to="/">Walk-in jobs</Link>
                                    </div>
                                    <span className='h-42 w-px bg-gradient-to-b from-transparent bg-gray-300 to-teansparent'></span>
                                    <div className='flex flex-col items-start gap-2'>
                                      <h3 className='pb-2 font-bold'>Jobs by location</h3>
                                      <Link to="/">Delhi</Link>
                                      <Link to="/">Mumbai</Link>
                                      <Link to="/">Hyderabad</Link>
                                      <Link to="/">Chennai</Link>
                                      <Link to="/">Banglore</Link>
                                      <Link to="/">Pune</Link>
                                    </div>
                                  </div>
                                </div>
                            </div>
    </div>
  )
}

export default Jobmenu
