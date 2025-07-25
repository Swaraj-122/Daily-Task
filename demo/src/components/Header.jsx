import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-600 text-white shadow-md w-full top-0 left-0 z-50">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-300">MyWebsite</h1> 
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-300">Signup</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
