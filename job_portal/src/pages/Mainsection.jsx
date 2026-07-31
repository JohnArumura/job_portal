import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Welcome from '../herosection/Welcome'
import Searchbar from'../components/Searchbar/Searchbar'
import Categories from '../herosection/Categories'
import Footer from '../components/Footer/Footer'
import bghome from '../assets/bghome.png'
import TopCompanies from '../components/topcompanies/TopCompanies'
import PopularSearches from '../PopularSearches'
import LatestSearch from '../components/topcompanies/LatestSearch'
import InterviewSection from '../components/Interviewcompnent/InterviewSection'

const Mainsection = () => {
  return (
    <div>
      <Navbar showSearchbar={false}/>
      <Welcome />
      <LatestSearch />
      <InterviewSection />
      <PopularSearches />
      <TopCompanies />
      <Footer />    
    </div>
  )
}

export default Mainsection
