import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of the menu or hamburger icon
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // 
    <div className="flex sm:flex-row px-5 items-center bg-black sticky top-10 z-50 text-white gap-5 rounded-2xl sm:text-xl justify-between ">
      <Link to="/" className="text-start">Parveen Pasricha</Link>
      <div ref={menuRef} className="flex items-center flex-col sm:flex-row">
        {/* Hamburger Menu Icon */}
        <IoMdMenu
          className="hover:text-purple-400 text-2xl lg:hidden"
          onClick={toggleMenu}
        />

        {/* Menu Items */}
        <div className={`flex items-center md:flex-col sm:flex-row gap-5 sm:gap-20 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/project" className="hover:text-purple-400">Project</Link>
          <Link to="/blog" className="hover:text-purple-400">Blog</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
          <Link className="bg-purple-600 font-bold text-white rounded-lg text-xl hover:bg-green-600" to="/hire">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
