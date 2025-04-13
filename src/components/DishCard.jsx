import React from 'react';

const DishCard = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-amber-900">{name}</h3>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">৳{price}</span>
        </div>
        <p className="text-gray-600 mb-3">{description}</p>
        <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 rounded transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default DishCard;