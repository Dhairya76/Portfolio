import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          DT<span className="accent-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
