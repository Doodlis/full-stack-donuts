import React from 'react';

const DonutItem = ({ donut }) => {
  
  return (
    <div>
      <h3>{donut.donut_name}</h3>
      <p>
        Price: {donut.price}
        Quantity: {donut.quantity} 
        Sprinkles? {donut.sprinkles}
        Glazed? {donut.glazed}
      </p>
    </div>
  );
};

export default DonutItem;

