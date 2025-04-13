import React from 'react';
import Carousel from '../components/Carousel';
import DishCard from '../components/DishCard';
import ReviewCard from '../components/ReviewCard';

// Import sample images - replace with actual image paths when available
const carouselImages = [
  '/src/assets/images/hero-1.jpg',
  '/src/assets/images/hero-2.jpg',
  '/src/assets/images/hero-3.jpg',
];

// Sample dish data
const signatureDishes = [
  {
    id: 1,
    title: 'Special Kacchi Biryani',
    image: '/src/assets/images/kacchi.jpg',
    description: 'Our signature dish made with fragrant basmati rice, tender meat, and secret spice blend.',
    price: 12.99
  },
  {
    id: 2,
    title: 'Hyderabadi Dum Biryani',
    image: '/src/assets/images/dum-biryani.jpg',
    description: 'Aromatic rice dish with succulent meat pieces and authentic spices.',
    price: 11.99
  },
  {
    id: 3,
    title: 'Special Polao',
    image: '/src/assets/images/polao.jpg',
    description: 'Flavorful rice prepared with ghee, aromatic spices and tender meat pieces.',
    price: 10.99
  }
];

// Sample reviews
const customerReviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/src/assets/images/reviewer-1.jpg',
    rating: 5,
    review: 'Best kacchi biryani I've ever tasted! The meat was perfectly tender and the rice was so flavorful.',
    date: 'March 15, 2025'
  },
  {
    id: 2,
    name: 'John Smith',
    image: '/src/assets/images/reviewer-2.jpg',
    rating: 4,
    review: 'Great food and excellent service. The polao was amazing! Will definitely come back.',
    date: 'February 28, 2025'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    image: '/src/assets/images/reviewer-3.jpg',
    rating: 5,
    review: 'Amazing atmosphere and even better food. The khichuri was absolutely delicious!',
    date: 'April 2, 2025'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                Welcome to <span className="text-amber-600">Sultan's Dine</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Experience the authentic taste of traditional Kacchi and Biryani made with 
                premium ingredients and cooked to perfection following centuries-old recipes.
              </p>
              <div className="flex gap-4">
                <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  Our Menu
                </a>
                <a href="/contact" className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                  Book a Table
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Carousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-2">Our Signature Dishes</h2>
          <p className="text-center text-gray-600 mb-8">Discover our most popular and beloved dishes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map(dish => (
              <DishCard 
                key={dish.id}
                title={dish.title}
                image={dish.image}
                description={dish.description}
                price={dish.price}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-2">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-8">Hear from our happy diners</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map(review => (
              <ReviewCard 
                key={review.id}
                name={review.name}
                image={review.image}
                rating={review.rating}
                review={review.review}
                date={review.date}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/reviews" className="inline-block border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              Read More Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Visit Us Today</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-amber-100 rounded-full">
                  <svg className="w-8 h-8 text-amber-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Our Location</h3>
                <p className="text-gray-600">123 Food Street, Cityville</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-amber-100 rounded-full">
                  <svg className="w-8 h-8 text-amber-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Opening Hours</h3>
                <p className="text-gray-600">Mon-Sat: 11:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Sunday: 12:00 PM - 9:00 PM</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-amber-100 rounded-full">
                  <svg className="w-8 h-8 text-amber-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Contact Us</h3>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: info@sultansdine.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;