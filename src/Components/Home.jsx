import React from "react";

const Home = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative font-serif mt-6">
        <img
          className="w-full rounded-full"
          src="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-design-image_458702.jpg"
          alt="Background"
        />
        {/* Text Over Background */}
        <div className="absolute top-0 left-0 p-8 sm:mx-44 text-white font-bold sm:text-xl lg:text-3xl">
          Mern Stack
        </div>
        <h1 className="absolute top-16 left-16 text-2xl font-bold text-white lg:text-6xl lg:left-16 lg:top-28 lg:font-serif  ">
          Parveen
        </h1>
        <h1 className="absolute top-24  text-center left-40 text-2xl font-bold text-white lg:top-48 lg:text-6xl lg:left-36">
          Pasricha
        </h1>
        <div className="absolute top-32 left-12 text-white lg:text-5xl lg:top-80">
          I'm a Mern Stack developer and
          <br /> I work remotely from India
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-black flex items-center justify-center p-10 mt-5 rounded-full">
        {/* Image Section */}
        <div className="relative flex justify-center mr-10">
        <img
  className="rounded-full h-48 lg:h-72"
  src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
  alt="About Me"
/>
        </div>

        {/* Text Section */}
        <div className="text-white">
          <label className="text-2xl lg:text-4xl font-bold mb-4">About Me</label>
          <br />
          <label className="text-xl lg:text-2xl">
            I am a Web Developer, Specializing in React and MongoDB. <br />
            My goal is to create user-friendly and innovative applications.
          </label>
        </div>
      </div>      
    </div>
  );
};

export default Home;
