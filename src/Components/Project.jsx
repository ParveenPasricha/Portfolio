import React from "react";

const Project = () => {
  const projects = [
    {
      month: "February 2025",
      img: "https://files.oaiusercontent.com/file-JE23ncU69A1RafVwmZyNmA?se=2025-03-06T17%3A30%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd842c398-e4ba-4a59-8c97-7e7c0cf77c66.webp&sig=MTCbr/Ws2Ce960yctFpMr/svWkEujOOlkawr6HmjoMM%3D",
      link: "https://tubeindia.vercel.app/"
    },
    {
      month: "January 2025",
      img: "https://strapi.dhiwise.com/uploads/how_are_ai_code_generators_revolutionizing_software_development_og_image_6530b2254b0bf_466823b8ba.webp",
      link: "https://portfolio-six-rust-35.vercel.app/"
    },
    {
      month: "January 2025",
      img: "https://cdn.openart.ai/published/d3INU5NS5zsxtR6k11uG/1KQ5CKtE_L2DY_1024.webp",
      link: "https://api-calling-sooty.vercel.app/"
    },
    {
      month: "December 2024",
      img: "https://cdn.shopify.com/s/files/1/0070/5901/3716/files/coding_background.jpg?v=1688538955",
      link: "https://add-post-seven.vercel.app/"
    },
    {
      month: "November 2024",
      img: "https://png.pngtree.com/thumb_back/fw800/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg",
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
