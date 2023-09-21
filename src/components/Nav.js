import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/Logo.svg';
import './NavBar.css';

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="navbar-logo" />
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">HOME</Link></li> 
        <li className="navbar-item"><Link to="/about">ABOUT</Link></li> 
        <li className="navbar-item"><Link to="/menu">MENU</Link></li> 
        <li className="navbar-item"><Link to="/reservations">RESERVATIONS</Link></li> 
        <li className="navbar-item"><Link to="/order-online">ORDER ONLINE</Link></li> 
        <li className="navbar-item"><Link to="/login">LOGIN</Link></li> 
      </ul>
    </nav>
  );
}

export default Nav;
