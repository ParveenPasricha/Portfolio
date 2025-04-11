import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-5 z-50 px-5">
      <div className="flex items-center justify-between bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl py-3 px-6 shadow-lg">
        <Link to="/" className="text-2xl font-bold tracking-widest text-purple-400 hover:text-purple-600 transition-all">
          Parveen Pasricha
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-lg">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/project" className="hover:text-purple-400 transition">Project</Link>
          <Link to="/blog" className="hover:text-purple-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
          <Link
            to="/hire"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-green-500 hover:to-lime-500 text-white px-4 py-2 rounded-xl font-semibold transition"
          >
            Hire Me
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black text-white mt-2 rounded-xl py-4 px-6 flex flex-col gap-4 shadow-md"
        >
          <Link to="/" className="hover:text-purple-400 transition" onClick={toggleMenu}>Home</Link>
          <Link to="/project" className="hover:text-purple-400 transition" onClick={toggleMenu}>Project</Link>
          <Link to="/blog" className="hover:text-purple-400 transition" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" className="hover:text-purple-400 transition" onClick={toggleMenu}>Contact</Link>
          <Link
            to="/hire"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-green-500 hover:to-lime-500 text-white px-4 py-2 rounded-xl font-semibold transition text-center"
            onClick={toggleMenu}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default Menu;
