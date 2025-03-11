import React from "react";
import { motion } from "framer-motion";
import "../App.css";

function Blog() {
  const skills = [
    { name: "HTML", level: "80%", color: "bg-blue-600" },
    { name: "Tailwind CSS", level: "90%", color: "bg-green-600" },
    { name: "JavaScript", level: "80%", color: "bg-yellow-500" },
    { name: "React", level: "90%", color: "bg-indigo-600" },
    { name: "NodeJS", level: "80%", color: "bg-orange-600" },
    { name: "MongoDB", level: "87%", color: "bg-emerald-600" },
    { name: "Express", level: "85%", color: "bg-teal-600" },
    { name: "Redux", level: "85%", color: "bg-cyan-600" },
    { name: "Zustand", level: "90%", color: "bg-rose-600" },
    { name: "MYSQL", level: "60%", color: "bg-purple-600" },
    { name: "CorelDraw", level: "80%", color: "bg-pink-600" },
    { name: "PhotoShop", level: "90%", color: "bg-red-600" },
    { name: "Core PHP", level: "60%", color: "bg-lime-600" },
  ];

  return (
    <div className="flex flex-col items-center px-5 md:px-20 py-10">
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <hr className="border-t-2 border-black w-1/2 mb-6" />

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="w-full max-w-lg mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold py-2">{skill.name}</h3>
          <div className="bg-gray-300 h-4 rounded-full w-full overflow-hidden">
            <motion.div
              className={`${skill.color} h-full rounded-full`}
              initial={{ width: "0%" }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Blog;
