import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop',
      alt: 'Kacchi Biryani'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1631515242802-10382c1df5a4?q=80&w=1888&auto=format&fit=crop',
      alt: 'Special Mutton Dishes'
    },
    {
      id: 3, 
      src: 'https://images.unsplash.com/photo-1576621934860-41214aa4cd01?q=80&w=2070&auto=format&fit=crop',
      alt: 'Delicious Kebabs'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;