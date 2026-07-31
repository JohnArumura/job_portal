import { Link } from 'react-router-dom'
import React from 'react'
import Searchbar from'../components/Searchbar/Searchbar'
import Getstarted from '../components/Getstarted'
// import AiTest from './AiTest';
import homebg from '../assets/homebg.png'
import AuthHero from '../components/AuthHero'


const MainHome = () => {
  return (
        <div>
          <div className=' min-h-screen bg-cover bg-center'
                      style={{
                          // backgroundImage :`url(${homebg})`
                           background: "linear-gradient( 120deg, #433870 0%, #6D5BD0  30%, #A78BFA 60%, #D8B4FE 80%, #F3E8FF 100%,)",
                          // backgroundImage: "linear-gradient(,#F8F2FF 12%,#F3E8FF 25%,#D8B4FE 45%,#A78BFA 70%,#6D5BD0 90%, #433870 100%)",
                      }}
                      >
          <div className='bg-white shadow '>
              <div className='max-w-7xl mx-auto flex flex-row items-center justify-between py-6 px-4 pe-6'>
                  <div className='flex flex-row gap-7'>
                    <h2 className='text-2xl font-bold'>CareerLink</h2>
                  </div>
                  <h2 className='font-arimo font-semibold text-xl pe-10'>Your success story begins with one application.</h2>
              </div>
            </div>
          <div>
            <div className='flex flex-col justify-center items-center gap-3 pt-8'>
                  {/* search bar */}
                <Searchbar />
                {/* get started */}
                <div className="grid grid-cols-4">
                <div className="col-span-2">
                  <Getstarted />
                </div>
                <div className="col-span-2">
                  <AuthHero />
                </div>
              </div>
                
                  {/* 👇 AI Test Component right under Getstarted */}
          {/* <div className='mt-8 w-full max-w-xl px-4'> */}
            {/* <AiTest /> */}
          {/* </div> */}
              </div>
          </div>
          </div>
        </div>
  )
}

export default MainHome;
