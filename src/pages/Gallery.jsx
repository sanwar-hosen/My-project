import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop',
      alt: 'Special Kacchi Biryani',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1631515242802-10382c1df5a4?q=80&w=1888&auto=format&fit=crop',
      alt: 'Mutton Tehari',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1576621934860-41214aa4cd01?q=80&w=2070&auto=format&fit=crop',
      alt: 'Chicken Roast',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1603496987539-dad6699636c4?q=80&w=1974&auto=format&fit=crop',
      alt: 'Borhani Drink',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1626429511884-27875f9b83a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Jali Kabab',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
      alt: 'Firni Dessert',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Restaurant Interior',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Cooking Process',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      alt: 'Catering Event',
    },
  ];
  
  const openLightbox = (image) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Our Gallery</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our delicious dishes and memorable moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" 
               onClick={closeLightbox}>
            <div className="max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <button 
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75"
                  onClick={closeLightbox}
                >
                  <i className="fas fa-times"></i>
                </button>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;