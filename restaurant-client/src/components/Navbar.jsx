import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file contains your custom styles

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__logo-link">
          Eats & Vibes
        </Link>
      </div>
      <nav className="navbar__menu">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/menu" className="navbar__link">Menu</Link>
        <Link to="/reservation" className="navbar__link">Reservation</Link>
      </nav>
    </header>
  );
};

export default Navbar;