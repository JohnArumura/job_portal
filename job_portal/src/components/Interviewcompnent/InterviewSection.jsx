import { useState } from "react";
import { Link } from 'react-router-dom'

const companies = [
  {
    company: "Google",
    role: "Frontend Developer",
    description:
      "Prepare for React, JavaScript, HTML, CSS and system design interviews.",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    description:
      "Practice DSA, OOP, AWS fundamentals and behavioral questions.",
  },
  {
    company: "Microsoft",
    role: "React Developer",
    description:
      "Focus on React, TypeScript, REST APIs and problem solving.",
  },
  {
    company: "Infosys",
    role: "Python Developer",
    description:
      "Practice Python, SQL, Django and aptitude questions.",
  },
];

export default function InterviewSection() {
  const [selected, setSelected] = useState(companies[0]);

  return (
    <div className="w-full py-12 px-10 bg-purple-50 rounded-2xl">

      <h2 className="text-3xl font-bold mb-8">
        Interview Preparation
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {/* Left */}

        <div className="col-span-2 h-[500px] bg-white rounded-xl shadow p-8">

          <h1 className="text-4xl font-bold">
            {selected.company}
          </h1>

          <h2 className="text-xl text-purple-700 mt-2">
            {selected.role}
          </h2>

          <p className="text-gray-600 mt-6">
            {selected.description}
          </p>

          <div className="mt-8 space-y-3">

            <div>✔ Technical Questions</div>

            <div>✔ HR Questions</div>

            <div>✔ Coding Problems</div>

            <div>✔ Aptitude Questions</div>

          </div>

          <Link to='/interview' className=" bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
            Start Interview
          </Link>

        </div>
        {/* Right */}

        <div className="space-y-4">

          {companies.map((item, index) => (

            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`cursor-pointer rounded-xl p-5 shadow transition
              ${
                selected.company === item.company
                  ? "bg-purple-600 text-white"
                  : "bg-white hover:bg-purple-100"
              }`}
            >
              <h3 className="font-bold">
                {item.company}
              </h3>

              <p className="text-sm">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}