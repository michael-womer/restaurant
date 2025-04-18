// menuItem.js

export function createMenuItem({ name, description, price, image }) {
    const card = document.createElement('div');
    card.style.border = '1px solid #eee';
    card.style.borderRadius = '10px';
    card.style.overflow = 'hidden';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
    card.style.backgroundColor = '#fff';
    card.style.transition = 'transform 0.2s ease';
    card.style.cursor = 'pointer';
  
    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.style.width = '100%';
    img.style.height = '180px';
    img.style.objectFit = 'cover';
  
    const content = document.createElement('div');
    content.style.padding = '15px';
  
    const title = document.createElement('h3');
    title.innerText = name;
    title.style.margin = '0 0 10px 0';
    title.style.fontSize = '18px';
  
    const desc = document.createElement('p');
    desc.innerText = description;
    desc.style.fontSize = '14px';
    desc.style.color = '#666';
  
    const cost = document.createElement('p');
    cost.innerText = price;
    cost.style.fontWeight = 'bold';
    cost.style.marginTop = '10px';
  
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(cost);
  
    card.appendChild(img);
    card.appendChild(content);
  
    return card;
  }