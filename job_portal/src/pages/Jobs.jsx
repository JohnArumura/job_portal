import { useState } from 'react'
import React from 'react'
import Jobcard from '../components/Jobpages/Jobcard'
import Navbar from '../components/Navbar/Navbar'
import Jobfilter from '../components/Jobfilter/Jobfilter'
import Jobdetails from '../components/Jobpages/Jobdetails'

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
   const job = {
    img:"",
      title : "Electrical Engineer",
      company: "Bharat It",
      experience:"0-7Yrs",
      location: "Pune",
      description: "We are looking for a passionate Software Engineer to build modern web applications using React and related technologies.",
      skills : ["unix","automation","linux","db2","XML"],
      post_date:"3days",

  responsibilities: [
    "Develop new features",
    "Fix bugs",
    "Write clean code",
    "Work with the backend team",
    "Participate in code reviews"
      ],
   qualifications: [
    "Bachelor's Degree",
    "Good communication skills",
    "Knowledge of React",
    "Basic Git knowledge"
  ]
    }
  return (
      <>
  <Navbar />
  {selectedJob ? (
    <Jobdetails job={selectedJob} onBack={() => setSelectedJob(null)} />

  ) : (
    <div className="grid grid-cols-4 gap-10 mt-10">
      <div className="col-span-1 ms-10">
        <Jobfilter />
      </div>
      <div className="col-span-3 flex flex-col gap-5">
        <Jobcard job={job} onSelect={setSelectedJob} />
        <Jobcard job={job} onSelect={setSelectedJob}/>
      </div>
    </div>
  )}
</>
    
  )
}

export default Jobs
