// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className='navButton'><Link to="/">Home</Link></li>
        <li className='navButton'><Link to="/rsvp">RSVP</Link></li>
        <li className='navButton'><Link to="/schedule">Schedule</Link></li>
        <li className='navButton'><Link to="/faq">FAQ</Link></li>
        <li className='navButton'><Link to="/explore">Explore</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
