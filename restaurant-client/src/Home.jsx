import React from 'react';
import './Home.css';
import MenuItem from './components/MenuItem';
function getDayOfWeek(dayIndex) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[dayIndex];
}
const Home = () => {
  const date = new Date()
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
        <h2>{getDayOfWeek(date.getDay())} Specials</h2>
        <MenuItem   
        name={'Loaded Flatbread'}
        description={'Flatbread with cheese, tomato, arugula & balsamic.'}
        price={'$11'}
        image={'https://neuroticmommy.com/wp-content/uploads/2018/10/Vegan-Bruschetta-and-Arugula-Flatbread-Pizza-With-a-Balsamic-Glaze-4.jpg'}
        colorScheme={'dark'}>
        </MenuItem>
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