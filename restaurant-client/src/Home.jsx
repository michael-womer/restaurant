import React from 'react';

const Home = () => {
  return (
    <div id="app">
      {/* Welcome Message */}
      <section className="welcome">
        <h1>Welcome to Eats & Vibes</h1>
        <p>Good food. Great people. Even better energy.</p>
      </section>

      {/* Hours Section */}
      <section className="hours">
        <h2>Hours</h2>
        <ul>
          <li>Mon–Thu: 10am – 10pm</li>
          <li>Fri: 10am – Midnight</li>
          <li>Sat–Sun: 9am – Midnight</li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="contact">
        <h2>Reach Us</h2>
        <p>Email: hello@eatsandvibes.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Location: 123 Flavor Street, Foodie City</p>
      </section>

      {/* Specials */}
      <section className="specials">
        <h2>Today’s Specials</h2>
        <ul>
          <li>🍳 Spicy Avocado Toast</li>
          <li>🍝 Late Night Truffle Pasta</li>
          <li>🍹 Passionfruit Paloma</li>
        </ul>
      </section>

      {/* Book a Table CTA */}
      <section className="book-table">
        <h2>Book a Table</h2>
        <p>We’d love to have you! Click below to reserve your spot or explore our menu.</p>
        <div className="buttons">
          <a href="reservation.html" className="btn">Make a Reservation</a>
          <a href="menu.html" className="btn outline">View Menu</a>
        </div>
      </section>
    </div>
  );
};

export default Home;