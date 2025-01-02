import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-white text-xl rounded-2xl p-8 mt-8">
      <div className="flex justify-center gap-12">
        <Link to='/frontend' className="hover:text-gray-400 transition duration-300 text-center">FrontEnd</Link>
        <Link to='/backend' className="hover:text-gray-400 transition duration-300 text-center">BackEnd</Link>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
