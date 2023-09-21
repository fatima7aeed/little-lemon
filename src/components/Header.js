import React from 'react';
import heroImage from '../images/header-pic.jpg';
import './Header.css';

function Header() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-location">Chicago</h2>
        <p className="hero-description">
        "A haven of culinary delight, where fresh
         flavors and warm ambiance blend to
         create unforgettable dining experiences."
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <img src={heroImage} alt="Little Lemon Restaurant" className="hero-image" />
    </header>
  );
}

export default Header;
