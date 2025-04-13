import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-amber-800 mb-12">About Us</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Sultan's Dine was founded in 2018 by Emma, a passionate food enthusiast with a deep appreciation 
              for authentic South Asian cuisine. Located in the heart of the city, our restaurant has quickly 
              become a favorite destination for lovers of kacchi biryani and traditional rice-based dishes.
            </p>
            <p className="text-gray-700 mb-4">
              Emma's journey began with a simple vision: to provide high-quality, authentic kacchi and related 
              food at affordable prices. What started as a small catering business for private and corporate 
              events has now grown into a full-service restaurant that maintains the same commitment to quality 
              and tradition.
            </p>
            <p className="text-gray-700 mb-6">
              At Sultan's Dine, we pride ourselves on using only the finest ingredients, sourced from trusted 
              local suppliers whenever possible. Our recipes have been perfected over years, combining 
              traditional cooking methods with modern techniques to create dishes that are both authentic 
              and innovative.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To preserve and share the rich culinary heritage of kacchi biryani and South Asian cuisine 
                while providing an exceptional dining experience that brings people together around the table.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Quality ingredients with no compromises</li>
                <li>Authentic recipes and traditional cooking methods</li>
                <li>Warm, welcoming service for every guest</li>
                <li>Community connection and cultural appreciation</li>
                <li>Sustainable and responsible business practices</li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/src/assets/images/restaurant-logo.jpg" 
                alt="Sultan's Dine Logo" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-lg shadow-lg">
                <p className="text-amber-800 italic font-medium">
                  "Good food is not just about taste; it's about bringing people together."
                </p>
                <p className="text-right text-amber-600 font-semibold mt-2">- Emma, Founder</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-amber-700 text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/src/assets/images/chef1.jpg" 
                alt="Head Chef" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-800">Rajiv Kumar</h3>
              <p className="text-amber-600 mb-2">Head Chef</p>
              <p className="text-gray-600">With over 20 years of experience, Chef Rajiv brings authentic recipes from his hometown to our kitchen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/src/assets/images/chef2.jpg" 
                alt="Sous Chef" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-800">Priya Singh</h3>
              <p className="text-amber-600 mb-2">Sous Chef</p>
              <p className="text-gray-600">Chef Priya specializes in creating the perfect spice blends that give our dishes their distinctive flavors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src="/src/assets/images/manager.jpg" 
                alt="Restaurant Manager" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-amber-800">Emma Thompson</h3>
              <p className="text-amber-600 mb-2">Owner & Manager</p>
              <p className="text-gray-600">Emma's passion for food and hospitality is at the heart of everything we do at Sultan's Dine.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;