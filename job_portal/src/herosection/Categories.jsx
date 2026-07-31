import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import React from 'react'

const Categories = () => {
  return (
    <div className=''>
      <div className='mt-30 flex gap-10'>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-10 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>Fresher job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-15 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>IT job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-10 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>Remote job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-10 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>FineTech job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-10 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>Start-up job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div>
                <div className='relative group'>
                  <div className='flex flex-row items-center'>
                      <Link to="/" className='py-3 px-10 bg-white/50 outline-none rounded-lg border border-gray-300 group-hover:shadow-xl group-hover:border-none'>Walk-in job</Link>
                      <div className='absolute left-[130px] transition-transform duration-300 group-hover:translate-x-2 overflow-hidden'>
                          <FaChevronRight />
                      </div>
                  </div>
                </div> 
              </div>
    </div>
  )
}

export default Categories
