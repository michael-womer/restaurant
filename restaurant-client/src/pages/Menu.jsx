import React from 'react';
import MenuSection from './MenuSection';

const menuData = {
  Brunch: [
    {
      name: 'Avocado Toast',
      description: 'Sourdough topped with smashed avocado, chili flakes & poached egg.',
      price: '$12',
      image: 'https://www.mediterraneanliving.com/wp-content/uploads/2018/04/image4.jpg',
    },
    {
      name: 'Berry Pancakes',
      description: 'Fluffy pancakes stacked with fresh berries and maple syrup.',
      price: '$10',
      image: 'https://chocolatewithgrace.com/wp-content/uploads/2023/03/Berry-Pancakes-CWG-7-1-of-1-scaled.jpg',
    },
  ],
  Dinner: [
    {
      name: 'Grilled Salmon',
      description: 'Fresh salmon with garlic herb butter and seasonal vegetables.',
      price: '$22',
      image: 'https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
    },
    {
      name: 'Truffle Pasta',
      description: 'Creamy fettuccine with wild mushrooms and shaved truffle.',
      price: '$19',
      image: 'https://www.sweetteaandthyme.com/wp-content/uploads/2024/02/truffle-mushroom-pasta-close-up.jpg',
    },
  ],
  Drinks: [
    {
      name: 'Espresso Martini',
      description: 'A perfect blend of espresso, vodka & coffee liqueur.',
      price: '$14',
      image: 'https://www.pamperedchef.ca/iceberg/com/recipe/2132836-lg.jpg',
    },
    {
      name: 'Cucumber Cooler',
      description: 'Gin-based cocktail with cucumber, mint & lime.',
      price: '$12',
      image: 'https://i0.wp.com/www.imbored-letsgo.com/wp-content/uploads/2016/05/Gin-Cucumber-Cooler.jpg?ssl=1',
    },
  ],
};

const Menu = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Menu</h1>
      {Object.entries(menuData).map(([category, items]) => (
        <MenuSection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    padding: '60px 20px',
    backgroundColor: '#fffaf5',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
  },
};

export default Menu;