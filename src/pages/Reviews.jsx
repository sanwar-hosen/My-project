import React from 'react';
import ReviewCard from '../components/ReviewCard';

// Sample review data
const reviewsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/src/assets/images/reviewer-1.jpg',
    rating: 5,
    review: 'Best kacchi biryani Ive ever tasted! The meat was perfectly tender and the rice was so flavorful. Will definitely come back again and recommend to friends.',
    date: 'March 15, 2025'
  },
  {
    id: 2,
    name: 'John Smith',
    image: '/src/assets/images/reviewer-2.jpg',
    rating: 4,
    review: 'Great food and excellent service. The polao was amazing! The staff was friendly and the atmosphere was cozy. Will definitely come back.',
    date: 'February 28, 2025'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    image: '/src/assets/images/reviewer-3.jpg',
    rating: 5,
    review: 'Amazing atmosphere and even better food. The khichuri was absolutely delicious! The spices were perfectly balanced.',
    date: 'April 2, 2025'
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    image: '/src/assets/images/reviewer-4.jpg',
    rating: 5,
    review: 'I ordered catering for my office event and everyone loved it! The food was still hot when it arrived and the taste was authentic. Highly recommend their catering service.',
    date: 'March 20, 2025'
  },
  {
    id: 5,
    name: 'Emily Chen',
    image: '/src/assets/images/reviewer-5.jpg',
    rating: 4,
    review: 'First time trying kacchi and Im impressed! The flavors were rich and the portion size was generous. Will definitely return to try more items from the menu.',
    date: 'April 5, 2025'
  },
  {
    id: 6,
    name: 'Michael Rodriguez',
    image: '/src/assets/images/reviewer-6.jpg',
    rating: 5,
    review: 'The special family pack kacchi was perfect for our gathering. Everyone loved it! The restaurant also accommodated our special requests. Outstanding service!',
    date: 'March 27, 2025'
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-6">Customer Reviews</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We value the feedback from our customers. Here's what some of our happy diners have to say about their experience at Sultan's Dine.
        </p>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="aspect-square">
              <ReviewCard 
                name={review.name}
                image={review.image}
                rating={review.rating}
                review={review.review}
                date={review.date}
              />
            </div>
          ))}
        </div>
        
        {/* Leave a Review Section */}
        <div className="mt-16 bg-amber-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-amber-800 mb-6">Share Your Experience</h2>
          <p className="text-center text-gray-600 mb-8">
            We'd love to hear about your dining experience at Sultan's Dine. Your feedback helps us improve and serve you better.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-gray-700 font-medium mb-2">Your Review</label>
                <textarea 
                  id="review" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Share your dining experience..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-8 rounded-full transition-colors duration-300"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;