import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
    

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Eats & Vibes</h1>
          <p>where comfort meets craft.</p>
          <a href="/reservation" className="book-table-btn">Book a Table</a>
        </div>
      </section>

      <section className="specials-section">
        <h2>Specials</h2>
        {/* Specials content will go here */}
      </section>

      <section className="info-section">
        <div className="hours">
          <h3>Hours</h3>
          <ul>
            <li>Sun - Thu: 10am - 11pm</li>
            <li>Fri & Sat: 10am - 1am</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Reach Us</h3>
          <ul>
            <li>123 Main Street</li>
            <li>(123) - 456- 7890</li>
            <li>contact@eatsvibe.com</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;