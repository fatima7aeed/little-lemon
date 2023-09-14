import React from 'react';
import logo from '../images/Logo.svg';
import './NavBar.css';

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="navbar-logo" />
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">HOME</a></li>
        <li className="navbar-item"><a href="/about">ABOUT</a></li>
        <li className="navbar-item"><a href="/menu">MENU</a></li>
        <li className="navbar-item"><a href="/reservations">RESERVATIONS</a></li>
        <li className="navbar-item"><a href="/order-online">ORDER ONLINE</a></li>
        <li className="navbar-item"><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
