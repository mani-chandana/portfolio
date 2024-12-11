import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#about"><i className="fa fa-user"></i> About</a></li>
      <li><a href="#skills"><i className="fa fa-cogs"></i> Skills</a></li>
      <li><a href="#projects"><i className="fa fa-briefcase"></i> Projects</a></li>
      <li><a href="#experience"><i className="fa fa-code"></i> Experience</a></li>
      <li><a href="#contact"><i className="fa fa-envelope"></i> Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
