import { Link } from 'react-router-dom'
import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'
import Searchbar from '../Searchbar/Searchbar'
import { FaUser } from 'react-icons/fa'
import Profilecard from './Profilecard'

const Navbar = ({ showSearchbar = true }) => {
  return (
    <div>
      <div className='bg-white shadow'>
        <div className='max-w-7xl mx-auto flex items-center justify-between py-6 px-4'>
          <div className='flex flex-row items-center gap-6'>
            <Logo />
          <Navlinks />
          </div>
          {showSearchbar && <Searchbar />}
          <div className='flex flex-row items-center gap-6'>
          <Profilecard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
