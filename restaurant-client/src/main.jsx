import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createReservationPage } from './reservation.js';
import { createMenuPage } from './menu.js';

createMenuPage('menu');
createReservationPage('reservation');
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
