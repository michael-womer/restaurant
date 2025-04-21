import React from 'react';
import './Navbar.css'; // Optional: External CSS for styles

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Eats & Vibes</div>
      <nav>
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="reservation.html">Reservation</a>
      </nav>
    </header>
  );
};

export default Navbar;