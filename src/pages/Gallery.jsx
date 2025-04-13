import React from 'react';

// Sample gallery images - replace with actual image paths
const galleryImages = [
  {
    id: 1,
    src: '/src/assets/images/gallery-1.jpg',
    alt: 'Special Kacchi Biryani served in a traditional bowl'
  },
  {
    id: 2,
    src: '/src/assets/images/gallery-2.jpg',
    alt: 'Chef preparing kacchi in traditional style'
  },
  {
    id: 3,
    src: '/src/assets/images/gallery-3.jpg',
    alt: 'Assortment of spices used in our dishes'
  },
  {
    id: 4,
    src: '/src/assets/images/gallery-4.jpg',
    alt: 'Restaurant interior showing traditional decor'
  },
  {
    id: 5,
    src: '/src/assets/images/gallery-5.jpg',
    alt: 'Close-up of aromatic polao'
  },
  {
    id: 6,
    src: '/src/assets/images/gallery-6.jpg',
    alt: 'Traditional cooking in large handis'
  },
  {
    id: 7,
    src: '/src/assets/images/gallery-7.jpg',
    alt: 'Catering setup for a corporate event'
  },
  {
    id: 8,
    src: '/src/assets/images/gallery-8.jpg',
    alt: 'Special kebabs and appetizers'
  },
  {
    id: 9,
    src: '/src/assets/images/gallery-9.jpg',
    alt: 'Festive biryani feast presentation'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">Our Gallery</h1>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Take a visual journey through our culinary creations, restaurant ambiance, and special events. 
          Every dish at Sultan's Dine is crafted with passion and served with pride.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 italic">
            "Food is our common ground, a universal experience." - James Beard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;