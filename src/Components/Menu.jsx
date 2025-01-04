import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="flex px-5 font- bg-black text-white text-2xl gap-5 rounded-2xl justify-between w-full">
      <Link to='/' className="text-start">Parveen Pasricha</Link>
      <div className="flex gap-5">
        <Link to='/'>Home</Link>
        <Link to='/project'>Project</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link className="bg-purple-600 font-bold text-white rounded-lg text-xl hover:bg-green-600" to='/hire'>Hire Me</Link>
      </div>
    </div>
  );
};

export default Menu;
