import React from 'react';
import MenuItem from '../components/MenuItem'
const menuData = {
  Brunch: [
    {
      name: 'Avocado Toast',
      description: 'Sourdough toast topped with smashed avocado, chili flakes & poached egg.',
      price: '$12',
      image: 'https://nuush.co.uk/wp-content/uploads/2021/03/Avocado-toast-and-eggs-UK-recipes.jpg'
    },
    {
      name: 'Berry Pancakes',
      description: 'Fluffy pancakes stacked with fresh berries and maple syrup.',
      price: '$10',
      image: 'https://www.sugarspicenmore.com/wp-content/uploads/2021/03/Pancakes-3.jpg'
    },
    {
      name: 'Smoked Salmon Bagel',
      description: 'Everything bagel, cream cheese, smoked salmon, and dill.',
      price: '$13',
      image: 'https://data.thefeedfeed.com/recommended/post_5588799.jpg'
    },
    {
      name: 'Shakshuka',
      description: 'Poached eggs in spiced tomato sauce with herbs.',
      price: '$11',
      image: 'https://www.loveandoliveoil.com/wp-content/uploads/2015/10/shakshuka-1200x800.jpg'
    },
    {
      name: 'Breakfast Burrito',
      description: 'Scrambled eggs, cheese, avocado, salsa in a flour tortilla.',
      price: '$9',
      image: 'https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos-1200x898.jpg'
    },
    {
      name: 'French Toast',
      description: 'Brioche dipped in cinnamon egg custard, maple syrup drizzle.',
      price: '$10',
      image: 'https://gimmedelicious.com/wp-content/uploads/2024/02/Brioche-French-Toast-sq.jpg'
    },
    {
      name: 'Chia Pudding Bowl',
      description: 'Coconut milk chia, topped with fruit and granola.',
      price: '$8',
      image: 'https://carissashaw.com/wp-content/uploads/2020/01/Chia-Pudding-with-Granola-and-Berries-22.jpg'
    },
    {
      name: 'Omelette Vibes',
      description: 'Three-egg omelette with mushrooms, cheese, and arugula.',
      price: '$11',
      image: 'https://cdn.prod.website-files.com/61b0cb4a7abb28f08d5c0a96/61b3a233323e78efdc92fe64_Cheesy%20Shiitake%20Arugula%20Omelette-main.jpg'
    }
  ],
  Dinner: [
    {
      name: 'Grilled Salmon',
      description: 'Fresh salmon with garlic herb butter and seasonal vegetables.',
      price: '$22',
      image: 'https://justcook.butcherbox.com/wp-content/uploads/2025/01/Lemon-Garlic-Butter-Salmon-with-Seasonal-Vegetables-.jpg'
    },
    {
      name: 'Truffle Pasta',
      description: 'Creamy fettuccine with wild mushrooms and shaved truffle.',
      price: '$19',
      image: 'https://www.sweetteaandthyme.com/wp-content/uploads/2024/02/truffle-mushroom-pasta-overhead-on-tray.jpg'
    },
    {
      name: 'Steak Frites',
      description: 'Marinated flank steak with crispy rosemary fries.',
      price: '$25',
      image: 'https://www.cakenknife.com/wp-content/uploads/2018/05/Grilled-Balsamic-Glazed-Flank-Steak_4374-thumbnail.jpg'
    },
    {
      name: 'Miso Glazed Cod',
      description: 'Pan-seared cod in miso glaze over jasmine rice.',
      price: '$21',
      image: 'https://www.foodiewithfamily.com/wp-content/uploads/2014/03/Korean-Miso-and-Honey-Glazed-Salmon-2a-450x500.jpg'
    },
    {
      name: 'Vegan Curry Bowl',
      description: 'Chickpea and sweet potato curry over quinoa.',
      price: '$16',
      image: 'https://www.shelikesfood.com/wp-content/uploads/2018/07/Quinoa-Chickpea-and-Sweet-Potato-Salad-with-Curry-Tahini-Dressing-9943.jpg'
    },
    {
      name: 'Lamb Kofta',
      description: 'Spiced lamb meatballs with cucumber yogurt.',
      price: '$20',
      image: 'https://www.danoneawayfromhome.com/wp-content/uploads/Oikos_SpicedLambMeatballs.jpg'
    },
    {
      name: 'Chicken Parm Sliders',
      description: 'Mini chicken parm sliders on brioche buns.',
      price: '$18',
      image: 'https://www.tasteofhome.com/wp-content/uploads/2024/02/Chicken-Parmesan-Slider-Bake_FT24_204498_JR_0124_3.jpg?fit=700,1024'
    },
    {
      name: 'Stuffed Portobello',
      description: 'Mushrooms stuffed with cheese and herbs.',
      price: '$17',
      image: 'https://www.appetiteforenergy.com/wp-content/uploads/2019/01/FI-3-2-Herb-and-Cream-Cheese-Stuffed-Mushrooms.jpg'
    }
  ],
  'Late-Night': [
    {
      name: 'Mini Nacho Stack',
      description: 'Loaded nachos with cheese, jalapeños, and crema.',
      price: '$10',
      image: 'https://i0.wp.com/taylahskitchen.com/wp-content/uploads/2021/01/nachos-1.jpg?resize=768%2C512&ssl=1'
    },
    {
      name: 'Crispy Brussels',
      description: 'Fried Brussels sprouts tossed in balsamic glaze.',
      price: '$9',
      image: 'https://images.squarespace-cdn.com/content/v1/5a90bdb5b98a781a570ee1ed/1614112325915-9K67CMAVZ0UOCGUHQBE9/Honey+Balsamic+Glazed+Brussels+Sprouts'
    },
    {
      name: 'Sliders Trio',
      description: 'Beef, chicken, and veggie sliders with dipping sauces.',
      price: '$14',
      image: 'https://iamhomesteader.com/wp-content/uploads/2023/01/shredded-beef-sliders-1.jpg'
    },
    {
      name: 'Sweet Potato Fries',
      description: 'Served with aioli and chipotle ketchup.',
      price: '$7',
      image: 'https://www.theharvestkitchen.com/wp-content/uploads/2024/06/chipotle-aioli-728x1092.jpg'
    },
    {
      name: 'Tempura Cauliflower',
      description: 'Cauliflower florets in tempura batter with sweet chili.',
      price: '$8',
      image: 'https://images.food52.com/iB4yr2OfOmdoeLcR7kA0QDJOwFI=/1200x1200/5df52265-1590-4cb0-bb66-6c6d3d7653c4--DSC_0061_Final-2.png'
    },
    {
      name: 'Spicy Tuna Bites',
      description: 'Tuna tartare on crispy rice.',
      price: '$12',
      image: 'https://takestwoeggs.com/wp-content/uploads/2022/03/Spicy-Tuna-Crispy-Rice-Takestwoeggs-FINAL-Photography-sq.webp'
    },
    {
      name: 'Loaded Flatbread',
      description: 'Flatbread with cheese, tomato, arugula & balsamic.',
      price: '$11',
      image: 'https://neuroticmommy.com/wp-content/uploads/2018/10/Vegan-Bruschetta-and-Arugula-Flatbread-Pizza-With-a-Balsamic-Glaze-4.jpg'
    },
    {
      name: 'Mozzarella Bombs',
      description: 'Fried mozzarella with house marinara.',
      price: '$9',
      image: 'https://spicedblog.com/wp-content/uploads/2023/02/Fried-Mozzarella-Sticks5.jpg'
    }
  ],
  Drinks: [
    {
      name: 'Espresso Martini',
      description: 'Espresso, vodka & coffee liqueur.',
      price: '$14',
      image: 'https://www.halfbakedharvest.com/wp-content/uploads/2021/11/Chai-Espresso-Martini-1.jpg'
    },
    {
      name: 'Cucumber Cooler',
      description: 'Gin, cucumber, mint & lime.',
      price: '$12',
      image: 'https://i0.wp.com/www.imbored-letsgo.com/wp-content/uploads/2016/05/Gin-Cucumber-Cooler.jpg?ssl=1'
    },
    {
      name: 'Spicy Paloma',
      description: 'Tequila, grapefruit, chili syrup, soda.',
      price: '$13',
      image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/07/spicy-paloma.jpg'
    },
    {
      name: 'Lychee Martini',
      description: 'Vodka, lychee juice, and a hint of rose.',
      price: '$13',
      image: 'https://www.lemonblossoms.com/wp-content/uploads/2021/07/Lychee-Martini-Cocktail-S2.jpg'
    },
    {
      name: 'Mocktail Mule',
      description: 'Ginger beer, lime, mint, no booze.',
      price: '$9',
      image: 'https://i2.wp.com/lmld.org/wp-content/uploads/2017/12/moscow-mule-6.jpg'
    },
    {
      name: 'Berry Sangria',
      description: 'Red wine, berries, and citrus blend.',
      price: '$12',
      image: 'https://www.onesweetmess.com/wp-content/uploads/2015/05/Summer-Berry-Moscato-Sangria-2.jpg'
    },
    {
      name: 'Iced Lavender Latte',
      description: 'Espresso with lavender milk & ice.',
      price: '$6',
      image: 'https://wearenotmartha.com/wp-content/uploads/Iced-Lavender-Latte-Featured.jpg'
    },
    {
      name: 'Sparkling Hibiscus Tea',
      description: 'Floral, tart, and bubbly.',
      price: '$7',
      image: 'https://diethood.com/wp-content/uploads/2023/05/hibiscus-tea-sparkler-7.jpg'
    }
  ]
};

const Menu = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Menu</h1>
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} style={styles.category}>
          <h2 style={styles.categoryTitle}>{category}</h2>
          <div style={styles.itemsContainer}>
            {items.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                colorScheme={'light'}
              />
            ))}
          </div>
        </div>
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
  category: {
    marginBottom: '40px',
  },
  categoryTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  itemsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
};
export default Menu;