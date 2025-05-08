import React from "react";

const Project = () => {
  const projects = [
{
      month: "May 2025 (SSSPL)",
      img: "https://i.ibb.co/h1rSy3DG/Untitled.jpg"
      link: "https://ssspl.vercel.app"
    },
    {
      month: "April 2025 (PP PROJECT)",
      img: "https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359356.jpg", //bjyus Project
      link: "https://pp-project-demo.vercel.app"
    },
    {
      month: "March 2025 (MEGA MATCHES)",
      img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg", 
      link: "https://mega-match.vercel.app"
    },
    {
      month: "March 2025 (TESTBOOK)",
      img: "https://img.freepik.com/free-vector/online-test-concept_52683-37445.jpg", 
      link: "https://pro1-lovat-ten.vercel.app/"
    },
    {
      month: "February 2025 (TUBE INDIA)",
      img: "https://img.freepik.com/free-vector/e-commerce-concept-illustration_114360-8213.jpg", // E-commerce theme
      link: "https://tubeindia.vercel.app/"
    },
    {
      month: "January 2025 (PORTFOLIO)",
      img: "https://img.freepik.com/premium-vector/portfolio-concept-illustration_86047-117.jpg", // Portfolio style
      link: "https://portfolio-six-rust-35.vercel.app/"
    },
    {
      month: "January 2025",
      img: "https://img.freepik.com/free-vector/artificial-intelligence-concept_23-2149238015.jpg", // AI/development theme
      link: "https://api-calling-sooty.vercel.app/"
    },
    {
      month: "December 2024",
      img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg", // Dev/code
      link: "https://add-post-seven.vercel.app/"
    },
    {
      month: "November 2024",
      img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg", // Coding + logic theme
      link: "#"
    }
  ];
  

  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 uppercase tracking-wider">
        Our Projects
      </h1>
      <div className="h-1 w-24 bg-blue-500 mx-auto my-3"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-16 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <img
              className="w-full h-60 object-cover"
              src={project.img}
              alt={`Project ${index + 1}`}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{project.month}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
