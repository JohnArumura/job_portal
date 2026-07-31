import React from 'react'
import { Link } from 'react-router-dom'

const Companiesmenu = () => {
  return (
    <div>
      <div className='relative group'>
                            <Link to="/" className="relative pb-1 text-gray-400 hover:text-black duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Companies</Link>
                            <div className='absolute left-[-80px] top-full mt-8 pb-5 w-[700px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                              <div className='flex flex-col'>
                                <div className='flex flex-row justify-evenly gap-6'>
                                      <div className='flex flex-col items-start gap-2'>
                                              <h3 className='pb-2 font-bold'>Explore categories</h3>
                                              <Link to="/">Unicorn</Link>
                                              <Link to="/">MNCs</Link>
                                              <Link to="/">Start-Up</Link>
                                              <Link to="/">Product Base</Link>
                                              <Link to="/">Internet</Link>
                                      </div>
                                  <span className='h-42 w-px bg-gradient-to-b from-transparent bg-gray-200 to-transparent'></span>
                                      <div className='flex flex-col items-start gap-2'>
                                              <h3 className='font-bold pb-2'>Explore collections</h3>
                                              <Link to="/">Top Companies</Link>
                                              <Link to="/">IT Companies</Link>
                                              <Link to="/">Fintech Companies</Link>
                                              <Link to="/">Sponsered Companies</Link>
                                              <Link to="/">Featured Companies</Link>
                                        </div>
                                  <span className='h-42 w-px bg-gradient-to-b from-transparent bg-gray-200 to-transparent'></span>
                                      <div className='flex flex-col gap-2'>
                                              <h3 className='font-bold pb-2'>Research companies</h3>
                                              <Link to="/">Interview Questions</Link>
                                              <Link to="/">Company Salaries</Link>
                                              <Link to="/">Company Reviews</Link>
                                              <Link to="/">Salary Calculator</Link>
                                        </div>
                                  </div>
                              </div>
                            </div>
                            </div>
    </div>
  )
}

export default Companiesmenu
