import React from 'react';
import Carousel from '../components/Carousel';
import DishCard from '../components/DishCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
  const signatureDishes = [
    {
      id: 1,
      name: 'Special Kacchi Biryani',
      description: 'Fragrant basmati rice cooked with tender meat, aromatic spices, and saffron',
      price: '350',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      id: 2,
      name: 'Mutton Tehari',
      description: 'Slow-cooked rice with premium mutton, traditional spices, and caramelized onions',
      price: '300',
      image: 'https://images.unsplash.com/photo-1631515242802-10382c1df5a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    },
    {
      id: 3,
      name: 'Chicken Roast',
      description: 'Marinated chicken slowly roasted with a blend of authentic Bengali spices',
      price: '220',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];
  
  const reviews = [
    {
      id: 1,
      name: 'Ahmed Khan',
      rating: 5,
      comment: 'Best kacchi biryani in town! The flavors are authentic and remind me of home.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'March 15, 2025'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 4,
      comment: 'Great food and excellent service. The mutton was tender and perfectly cooked!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'February 28, 2025'
    },
    {
      id: 3,
      name: 'Rahul Das',
      rating: 5,
      comment: 'Their catering service for our corporate event was outstanding. Everyone loved the food!',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      date: 'April 2, 2025'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                Experience Authentic <span className="text-amber-600">Kacchi Biryani</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Indulge in the royal flavors of our signature dishes, prepared with traditional recipes and premium ingredients.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                  View Menu
                </button>
                <button className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-medium py-2 px-6 rounded-md transition duration-300">
                  Book a Table
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      
      {/* Signature Dishes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Our Signature Dishes</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the extraordinary flavors of our most popular dishes, crafted with love and tradition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map(dish => (
              <DishCard key={dish.id} {...dish} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer Reviews Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
            <div className="h-1 w-20 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Contact Us</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Main Street, City Center</p>
            </div>
            
            <div className="p-6">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone-alt text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+123-456-7890</p>
            </div>
            
            <div className="p-6">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Everyday: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;