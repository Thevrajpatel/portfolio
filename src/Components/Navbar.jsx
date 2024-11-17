
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add custom styles

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
