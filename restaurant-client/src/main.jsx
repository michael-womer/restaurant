import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createReservationPage } from './reservation.js';
import { createMenuPage } from './menu.js';
import App from './App.jsx'
import { createMenuItem } from './menuItem.js';

const sampleItem = {
  name: 'Miso Glazed Eggplant',
  description: 'Caramelized eggplant with miso glaze, sesame, and scallion.',
  price: '$11',
  image: 'https://source.unsplash.com/400x300/?eggplant'
};

const container = document.getElementById('menu');
const itemCard = createMenuItem(sampleItem);
container.appendChild(itemCard);

createMenuPage('menu');
createReservationPage('reservation');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
