import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.counter.dev/script.js";
    script.setAttribute('data-id', '6d505942-3f9e-4a0c-be97-e4db8cb7d623');
    script.setAttribute('data-utcoffset', '6');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black text-white text-xl rounded-2xl p-8 mt-8">
      <div className="flex justify-center gap-12">
        <Link to='/frontend' className="hover:text-gray-400 transition duration-300 text-center">FrontEnd</Link>
        <Link to='/backend' className="hover:text-gray-400 transition duration-300 text-center">BackEnd</Link>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
