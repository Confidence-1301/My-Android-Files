import React from 'react';

const ShopItemCard = ({ name, description, price, freeShipping }) => {
  return (
    <div className="w-full p-4 mb-4 shadow-lg rounded-2xl border">
      <div>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">${price}</span>
          {freeShipping && <span className="bg-green-500 text-white px-2 py-1 rounded-full">Free Shipping</span>}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};

const ShopItemList = () => {
  const items = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality sound with noise cancellation.',
      price: 99.99,
      freeShipping: true,
    },
    {
      name: 'Smart Watch',
      description: 'Track your fitness and notifications.',
      price: 199.99,
      freeShipping: false,
    },
    {
      name: 'Portable Speaker',
      description: 'Waterproof and long-lasting battery.',
      price: 49.99,
      freeShipping: true,
    },
    {
      name: 'Laptops',
      description: '',
      price: 29.99,
      freeShipping: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <ShopItemCard 
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          freeShipping={item.freeShipping}
        />
      ))}
    </div>
  );
};

export default ShopItemList;
