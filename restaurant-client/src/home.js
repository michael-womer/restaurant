const app = document.getElementById('app');

// Welcome Message
const welcome = document.createElement('section');
welcome.className = 'welcome';
welcome.innerHTML = `
  <h1>Welcome to Eats & Vibes</h1>
  <p>Good food. Great people. Even better energy.</p>
`;

// Hours Section
const hours = document.createElement('section');
hours.className = 'hours';
hours.innerHTML = `
  <h2>Hours</h2>
  <ul>
    <li>Mon–Thu: 10am – 10pm</li>
    <li>Fri: 10am – Midnight</li>
    <li>Sat–Sun: 9am – Midnight</li>
  </ul>
`;

// Contact Info
const contact = document.createElement('section');
contact.className = 'contact';
contact.innerHTML = `
  <h2>Reach Us</h2>
  <p>Email: hello@eatsandvibes.com</p>
  <p>Phone: (555) 123-4567</p>
  <p>Location: 123 Flavor Street, Foodie City</p>
`;

// Specials
const specials = document.createElement('section');
specials.className = 'specials';
specials.innerHTML = `
  <h2>Today’s Specials</h2>
  <ul>
    <li>🍳 Spicy Avocado Toast</li>
    <li>🍝 Late Night Truffle Pasta</li>
    <li>🍹 Passionfruit Paloma</li>
  </ul>
`;

// Book a Table CTA
const bookTable = document.createElement('section');
bookTable.className = 'book-table';
bookTable.innerHTML = `
  <h2>Book a Table</h2>
  <p>We’d love to have you! Click below to reserve your spot or explore our menu.</p>
  <div class="buttons">
    <a href="reservation.html" class="btn">Make a Reservation</a>
    <a href="menu.html" class="btn outline">View Menu</a>
  </div>
`;

// Append to #app
app.appendChild(welcome);
app.appendChild(hours);
app.appendChild(contact);
app.appendChild(specials);
app.appendChild(bookTable);