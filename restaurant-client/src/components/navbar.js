export function createNavbar() {
    const navbar = document.createElement('header');
    navbar.className = 'navbar';
  
    navbar.innerHTML = `
      <div class="logo">Eats & Vibes</div>
      <nav>
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="reservation.html">Reservation</a>
      </nav>
    `;
  
    return navbar;
  }