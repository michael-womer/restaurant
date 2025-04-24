


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
