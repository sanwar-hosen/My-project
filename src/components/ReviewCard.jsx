import React from 'react';

const ReviewCard = ({ name, rating, comment, image, date }) => {
  // Create star rating display
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i 
        key={i}
        className={`${i <= rating ? 'fas' : 'far'} fa-star text-amber-500`}
      ></i>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex items-center">
            <div className="mr-2">
              {stars}
            </div>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{comment}"</p>
    </div>
  );
};

export default ReviewCard;