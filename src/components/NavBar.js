// src/components/NavBar.js
import React from 'react';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav className="bg-black text-white px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-15 w-11" />
          <h1 className="text-xl font-bold">DevOps</h1>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:underline">HOME</a></li>
          <li><a href="#our-story" className="hover:underline">OUR STORY</a></li>
          <li><a href="#service" className="hover:underline">SERVICE</a></li>
          <li><a href="#contact" className="hover:underline">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// test pipelien 11/15
