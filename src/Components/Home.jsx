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
        <div className="absolute top-0 left-0 p-8 mx-44 text-white font-bold md:text-2xl lg:text-3xl">
          Mern Stack
        </div>
        <h1 className="absolute top-12 left-4 p-8 mx-20 text-white font-bold md:text-5xl lg:text-6xl">
          Parveen
        </h1>
        <h1 className="absolute top-28 left-16 p-10 mx-36 text-white font-bold md:text-5xl lg:text-6xl">
          Pasricha
        </h1>
        <div className="absolute top-64 left-10 p-4 text-white text-4xl font-bold md:text-2xl lg:text-4xl">
          I'm a Mern Stack developer and
          <br /> I work remotely from India
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-black flex items-center justify-center p-10 mt-5 rounded-full">
        {/* Image Section */}
        <div className="relative flex justify-center mr-10">
          <img
            className="rounded-full h-96 w-96"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="About Me"
          />
        </div>

        {/* Text Section */}
        <div className="text-white max-w-lg">
          <label className="text-4xl font-bold mb-4">About Me</label>
          <br />
          <label className="text-2xl">
            I am a Web Developer, Specializing in React and MongoDB. <br />
            My goal is to create user-friendly and innovative applications.
          </label>
        </div>
      </div>      
    </div>
  );
};

export default Home;
