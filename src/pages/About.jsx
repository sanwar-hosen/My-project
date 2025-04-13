import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">About Us</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-10 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Sultan's Dine was founded in 2018 by Emma, a passionate chef with a dream to bring authentic Kacchi Biryani and traditional dishes to food lovers. Located in the heart of the city, we've quickly become known for our exceptional catering services for private and corporate events.
            </p>
            
            <p className="text-gray-700 mb-4">
              At Sultan's Dine, we believe in preserving the authentic flavors while adding our unique touch. Emma personally oversees the preparation of each dish, ensuring that the quality and taste meet our high standards. We use only the finest ingredients and traditional cooking methods to create dishes that delight our customers.
            </p>
            
            <p className="text-gray-700 mb-4">
              Our mission is to provide high-quality food at an affordable price. We take pride in our customer service and strive to create memorable dining experiences for everyone who chooses Sultan's Dine.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-amber-800 mb-2">Meet Emma</h4>
              <p className="text-gray-700">
                Emma's passion for cooking began at a young age, learning traditional recipes from her grandmother. After years of perfecting her craft and creating new recipes, she decided to share her culinary skills with the world by opening Sultan's Dine. Her dedication to quality and innovation has been the driving force behind our success.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2050&auto=format&fit=crop"
                alt="Sultan's Dine Logo" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-100 rounded-lg p-4 shadow-lg">
                <p className="text-amber-900 font-bold text-lg">Established 2018</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Quality Food</h3>
              <p className="text-gray-600">We use only the finest ingredients to prepare our dishes with authentic recipes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Experienced Staff</h3>
              <p className="text-gray-600">Our team consists of experienced chefs and friendly staff dedicated to excellent service.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-amber-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-amber-800 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Professional Catering</h3>
              <p className="text-gray-600">We offer customized catering services for events of all sizes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;