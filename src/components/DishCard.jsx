import React from 'react';

const DishCard = ({ title, image, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-amber-800">{title}</h3>
          <span className="text-amber-600 font-semibold">${price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DishCard;