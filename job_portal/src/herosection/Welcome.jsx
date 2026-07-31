import React from 'react'
import homebg from '../assets/homebg.png'  
import Searchbar from'../components/Searchbar/Searchbar'
import Categories from './Categories'


const Welcome = () => {
    const name ='john'
  return (
    <div>
                <div className='flex items-center flex-col pt-10 w-screen h-100 gap-5'>
                    {/* welcome and search */}
                    <div className='flex items-center flex-col mb-10'>
                        <h1 className='text-4xl font-black'>Welcome, {name}!</h1>
                        <h1 className='text-xl'>Find your dream job now</h1>
                        <h1 className='text-xl'>5 lakh+ jobs for you to explore</h1>
                    </div>
                    <Searchbar />   
                    <Categories />
                </div>
        </div>       

  )
}
export default Welcome;
