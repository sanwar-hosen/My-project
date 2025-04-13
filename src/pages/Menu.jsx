import React, { useState } from 'react';

// Menu data with categories
const menuData = {
  kacchi: [
    {
      id: 1,
      name: "Special Kacchi Biryani",
      description: "Our signature dish with fragrant rice, tender meat, and secret spice blend",
      price: 12.99,
      image: "/src/assets/images/kacchi.jpg"
    },
    {
      id: 2,
      name: "Kacchi Biryani with Boiled Egg",
      description: "Traditional kacchi biryani served with a boiled egg",
      price: 13.99,
      image: "/src/assets/images/kacchi-egg.jpg"
    },
    {
      id: 3,
      name: "Family Pack Kacchi",
      description: "Large portion for 3-4 persons with extra meat pieces",
      price: 29.99,
      image: "/src/assets/images/kacchi-family.jpg"
    }
  ],
  biryani: [
    {
      id: 1,
      name: "Hyderabadi Dum Biryani",
      description: "Aromatic rice dish with succulent meat pieces and authentic spices",
      price: 11.99,
      image: "/src/assets/images/hyderabadi.jpg"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Flavorful rice cooked with tender chicken and aromatic spices",
      price: 10.99,
      image: "/src/assets/images/chicken-biryani.jpg"
    },
    {
      id: 3,
      name: "Vegetable Biryani",
      description: "Mixed vegetables cooked with aromatic rice and spices",
      price: 8.99,
      image: "/src/assets/images/veg-biryani.jpg"
    }
  ],
  polao: [
    {
      id: 1,
      name: "Special Polao",
      description: "Fragrant rice cooked with ghee, aromatic spices and tender meat pieces",
      price: 10.99,
      image: "/src/assets/images/polao.jpg"
    },
    {
      id: 2,
      name: "Chicken Polao",
      description: "Aromatic rice dish with succulent chicken pieces",
      price: 9.99,
      image: "/src/assets/images/chicken-polao.jpg"
    }
  ],
  khichuri: [
    {
      id: 1,
      name: "Special Beef Khichuri",
      description: "Rice and lentil preparation with tender beef and special spices",
      price: 11.99,
      image: "/src/assets/images/beef-khichuri.jpg"
    },
    {
      id: 2,
      name: "Plain Khichuri",
      description: "Traditional rice and lentil preparation with aromatic spices",
      price: 7.99,
      image: "/src/assets/images/plain-khichuri.jpg"
    }
  ],
  sides: [
    {
      id: 1,
      name: "Beef Rezala",
      description: "Tender beef pieces in a rich yogurt-based gravy",
      price: 8.99,
      image: "/src/assets/images/beef-rezala.jpg"
    },
    {
      id: 2,
      name: "Chicken Roast",
      description: "Marinated chicken roasted to perfection with special spices",
      price: 7.99,
      image: "/src/assets/images/chicken-roast.jpg"
    },
    {
      id: 3,
      name: "Borhani",
      description: "Traditional spiced yogurt drink",
      price: 2.99,
      image: "/src/assets/images/borhani.jpg"
    }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('kacchi');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-6">Our Menu</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our wide selection of authentic dishes, prepared with the finest ingredients and 
          traditional recipes handed down through generations.
        </p>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(menuData).map((category) => (
            <button 
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-4 py-2 rounded-full ${
                activeTab === category 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              } transition-colors duration-300 capitalize font-medium`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuData[activeTab].map((item) => (
            <div key={item.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-1/3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
                  <span className="text-amber-600 font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special Notes */}
        <div className="mt-16 bg-amber-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amber-800 mb-4">Special Notes</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>All our meat is halal and sourced from trusted local suppliers.</li>
            <li>Please inform our staff about any allergies or dietary restrictions.</li>
            <li>Prices may change during special occasions and festivals.</li>
            <li>Large orders for events require 24-hour advance booking.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;