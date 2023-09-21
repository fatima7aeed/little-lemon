import React from 'react';
import './Highlights.css';

// Import the images directly
import greekSaladImage from '../images/greek-salad.jpg';
import bruschettaImage from '../images/bruchetta.svg';
import lemonDessertImage from '../images/lemon-dessert.jpg';

// Rest of your code remains the same


function SpecialCard({ id, name, image, description }) {
  const handleClick = () => {
    // You can navigate to another page here when a card is clicked.
    // For example, you can use React Router to handle navigation.
    // Replace the example URL with the actual URL you want to navigate to.
    window.location.href = `/special/${id}`;
  };

  return (
    <div className="special" onClick={handleClick}>
      <img src={image} alt={name} className="special-image" />
      <h3 className="special-name">{name}</h3>
      <p className="special-description">{description}</p>
      <p className="order-link">
        Order a delivery <img src="./bike.png" alt="Bike" className="bike-image" />
      </p>
    </div>
  );
}

function RestaurantSpecials() {
  // Define an array of specials with images and descriptions
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      image: greekSaladImage, // Use the defined image path
      description:
        'A Greek salad is a vibrant and flavorful Mediterranean dish, a delicious combination of fresh veggies, olives, and feta cheese tossed in a zesty dressing.',
    },
    {
      id: 2,
      name: 'Bruschetta',
      image: bruschettaImage, // Use the defined image path
      description: 'Another fantastic special dish for food lovers.',
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      image: lemonDessertImage, // Use the defined image path
      description: 'Yet another special dish to delight your taste buds.',
    },
    // Add more specials as needed
  ];

  return (
    <div>
      <a href="/menu" className="menu-link">
        Online Menu
      </a>

      <h2>This Week's Specials</h2>
      <div className="specials-container">
        {specials.map((special) => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantSpecials;
