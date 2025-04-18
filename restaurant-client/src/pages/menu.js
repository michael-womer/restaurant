// menu.js

export function createMenuPage(containerId) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error('Menu container not found');
      return;
    }
  
    // Sample menu data
    const menuData = {
      Brunch: [
        {
          name: 'Avocado Toast',
          description: 'Sourdough topped with smashed avocado, chili flakes & poached egg.',
          price: '$12',
          image: 'https://source.unsplash.com/400x300/?avocado-toast'
        },
        {
          name: 'Berry Pancakes',
          description: 'Fluffy pancakes stacked with fresh berries and maple syrup.',
          price: '$10',
          image: 'https://source.unsplash.com/400x300/?pancakes'
        }
      ],
      Dinner: [
        {
          name: 'Grilled Salmon',
          description: 'Fresh salmon with garlic herb butter and seasonal vegetables.',
          price: '$22',
          image: 'https://source.unsplash.com/400x300/?grilled-salmon'
        },
        {
          name: 'Truffle Pasta',
          description: 'Creamy fettuccine with wild mushrooms and shaved truffle.',
          price: '$19',
          image: 'https://source.unsplash.com/400x300/?truffle-pasta'
        }
      ],
      Drinks: [
        {
          name: 'Espresso Martini',
          description: 'A perfect blend of espresso, vodka & coffee liqueur.',
          price: '$14',
          image: 'https://source.unsplash.com/400x300/?espresso-martini'
        },
        {
          name: 'Cucumber Cooler',
          description: 'Gin-based cocktail with cucumber, mint & lime.',
          price: '$12',
          image: 'https://source.unsplash.com/400x300/?cocktail'
        }
      ]
    };
  
    container.style.fontFamily = 'Poppins, sans-serif';
    container.style.padding = '60px 20px';
    container.style.backgroundColor = '#fffaf5';
    container.style.color = '#333';
  
    const title = document.createElement('h1');
    title.innerText = 'Our Menu';
    title.style.textAlign = 'center';
    title.style.marginBottom = '40px';
    container.appendChild(title);
  
    for (const category in menuData) {
      const sectionTitle = document.createElement('h2');
      sectionTitle.innerText = category;
      sectionTitle.style.marginTop = '40px';
      sectionTitle.style.marginBottom = '20px';
      sectionTitle.style.borderBottom = '2px solid #ff7043';
      container.appendChild(sectionTitle);
  
      const grid = document.createElement('div');
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
      grid.style.gap = '20px';
  
      menuData[category].forEach(dish => {
        const card = document.createElement('div');
        card.style.border = '1px solid #eee';
        card.style.borderRadius = '10px';
        card.style.overflow = 'hidden';
        card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
        card.style.backgroundColor = '#fff';
  
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        img.style.width = '100%';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
  
        const content = document.createElement('div');
        content.style.padding = '15px';
  
        const name = document.createElement('h3');
        name.innerText = dish.name;
        name.style.margin = '0 0 10px 0';
        name.style.fontSize = '18px';
  
        const desc = document.createElement('p');
        desc.innerText = dish.description;
        desc.style.fontSize = '14px';
        desc.style.color = '#666';
  
        const price = document.createElement('p');
        price.innerText = dish.price;
        price.style.fontWeight = 'bold';
        price.style.marginTop = '10px';
  
        content.appendChild(name);
        content.appendChild(desc);
        content.appendChild(price);
        card.appendChild(img);
        card.appendChild(content);
        grid.appendChild(card);
      });
  
      container.appendChild(grid);
    }
  }