import React from "react";
import '../App.css'

function Blog() {
  return (
    <div className="justify-items-center">
      <label className="text-3xl font-bold">My Skills</label>
      <hr className="border-t-2 border-black mx-20" />
      {/* First Section */}
      <h1 className="py-3 text-2xl font-bold font-sans">HTML </h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div
          className="bg-blue-600 h-full rounded-full"
          style={{ width: "80%" }}
        ></div>
      </div>
      {/* Second Section */}
      <h1 className="py-3 text-2xl font-bold font-sans">Tailwind CSS</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-green-600 h-full rounded-full" style={{width:'90%'}}></div>
      </div>
      {/* Third Section */}
      <h1 className="font-bold text-2xl font-sans py-3">JavaScript</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-pink-500 h-full rounded-full" style={{width: '80%'}}></div>
      </div>

      {/* Four Section */}
      <h1 className="font-bold text-2xl font-sans py-3">React</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-yellow-500 h-full rounded-full" style={{width: '90%'}}></div>
      </div>

      {/* Five Section */}
      <h1 className="font-bold text-2xl font-sans py-3">NodeJS</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-orange-600 h-full rounded-full" style={{width: '40%'}}></div>
      </div>

      {/* Six Section */}
      <h1 className="font-bold text-2xl font-sans py-3">MYSQL</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-purple-600 h-full rounded-full" style={{width: '60%'}}></div>
      </div>

      {/* Seven Section */}
      <h1 className="font-bold text-2xl font-sans py-3">CorelDraw</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-cyan-600 h-full rounded-full" style={{width: '80%'}}></div>
      </div>

      {/* Eight Section */}
      <h1 className="font-bold text-2xl font-sans py-3">PhotoShop</h1>
      <div className="bg-gray-300 h-4 rounded-full w-full max-w-lg animate-bar">
        <div className="bg-red-600 h-full rounded-full" style={{width: '90%'}}></div>
      </div>

      {/* Nine Section */}
      <h1 className="font-bold text-2xl font-sans py-3">Core PHP</h1>
      <div className="bg-gray-300 h-4 w-full rounded-full max-w-lg animate-bar">
        <div className="bg-fuchsia-600 h-full rounded-full" style={{width: '60%'}}></div>
        </div>      
    </div>
  );
}

export default Blog;
