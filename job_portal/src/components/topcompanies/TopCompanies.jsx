import React, { useState, useEffect } from "react";
import Jobcard from "../Jobpages/Jobcard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    experience: "2-5 Years",
    location: "Hyderabad",
    salary: "₹8 LPA",
    description: "Develop responsive web applications using React and Tailwind CSS.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    post_date: "2 days",
    img: "https://logo.clearbit.com/google.com",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Microsoft",
    experience: "1-3 Years",
    location: "Bengaluru",
    salary: "₹10 LPA",
    description: "Build scalable React applications with reusable components.",
    skills: ["React", "Redux", "TypeScript"],
    post_date: "1 day",
    img: "https://logo.clearbit.com/microsoft.com",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Amazon",
    experience: "3-6 Years",
    location: "Pune",
    salary: "₹12 LPA",
    description: "Work on cloud-based applications and backend services.",
    skills: ["Java", "AWS", "Spring Boot"],
    post_date: "3 days",
    img: "https://logo.clearbit.com/amazon.com",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Infosys",
    experience: "2-4 Years",
    location: "Chennai",
    salary: "₹7 LPA",
    description: "Develop REST APIs and database-driven applications.",
    skills: ["Node.js", "Express", "MongoDB"],
    post_date: "5 days",
    img: "https://logo.clearbit.com/infosys.com",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "TCS",
    experience: "1-4 Years",
    location: "Mumbai",
    salary: "₹9 LPA",
    description: "Develop MERN stack applications for enterprise clients.",
    skills: ["React", "Node.js", "MongoDB"],
    post_date: "Today",
    img: "https://logo.clearbit.com/tcs.com",
  },
];

const TopCompanies = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (showAll) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jobs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showAll]);

  return (
    <div className="w-full py-10 bg-purple-50">

      {/* Heading */}
      <div className="flex justify-between items-center px-6 mb-8">
        <h2 className="text-3xl font-bold">
          Job Openings in Top Companies
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-purple-600 font-semibold hover:text-purple-800"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {jobs.map((job) => (
            <Jobcard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <>
          {/* Slider */}
          <div className="overflow-hidden px-6 py-10">
            <div
              className="flex gap-6 transition-transform duration-700"
              style={{
                transform: `translateX(-${currentSlide * 34}%)`,
              }}
            >
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="w-[38%] flex-shrink-0"
                >
                  <Jobcard job={job} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {jobs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-10 h-3 bg-purple-600"
                    : "w-3 h-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TopCompanies;