import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-black min-h-screen">


      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-design-image_458702.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-xl lg:text-3xl font-mono tracking-widest text-purple-400">MERN STACK DEVELOPER</p>
          <h1 className="text-5xl lg:text-7xl font-bold mt-2 animate-bounce">Parveen Pasricha</h1>
          <p className="mt-4 text-lg lg:text-2xl font-light text-gray-300">
            Building Scalable & Creative Web Applications 💻
          </p>
          <p className="mt-2 text-lg lg:text-xl">🌏</p>
          <Link to='/hire'
            className="mt-6 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-12 bg-gray-800 text-white rounded-xl shadow-2xl mt-12 mx-4 lg:mx-24">
        

        <div className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-purple-400 shadow-xl">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="About Me"
          />
        </div>

      
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-purple-400">About Me</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            I’m a passionate Web Developer specializing in **React.js** and **MongoDB**. 
            I love solving real-world problems with technology and crafting user-friendly interfaces.
            Let’s build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
