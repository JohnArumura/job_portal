import React from 'react'
import Jobmenu from './Jobmenu'
import Companiesmenu from './Companiesmenu'
import Servicemenu from './Servicemenu'

const Navlinks = () => {
  return (
    <div>
      <div className='flex flex-row gap-7'>
          <Jobmenu />
      <Companiesmenu />
      <Servicemenu />
      </div>
    </div>
  )
}

export default Navlinks
