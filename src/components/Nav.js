import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';
import './NavBar.css';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Little Lemon Logo" className="navbar-logo" />
      </div>
      {isMobile && (
        <div className="navbar-right">
          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      )}
      {isMobile && isMenuOpen && ( // Conditionally render the menu items on mobile when the menu is open
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><Link to="/">HOME</Link></li>
          <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
          <li className="navbar-item"><Link to="/menu">MENU</Link></li>
          <li className="navbar-item"><Link to="/reservations">RESERVATIONS</Link></li>
          <li className="navbar-item"><Link to="/order-online">ORDER ONLINE</Link></li>
          <li className="navbar-item"><Link to="/login">LOGIN</Link></li>
        </ul>
      )}
      {!isMobile && (
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><Link to="/">HOME</Link></li>
          <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
          <li className="navbar-item"><Link to="/menu">MENU</Link></li>
          <li className="navbar-item"><Link to="/reservations">RESERVATIONS</Link></li>
          <li className="navbar-item"><Link to="/order-online">ORDER ONLINE</Link></li>
          <li className="navbar-item"><Link to="/login">LOGIN</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
