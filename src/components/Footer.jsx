import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Sultan's Dine</h3>
            <p className="mb-4 max-w-md">
              Home of authentic Kacchi and catering services for private and corporate events.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-amber-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-amber-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-amber-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-300">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-300">Gallery</Link></li>
              <li><Link to="/menu" className="hover:text-amber-300">Menu</Link></li>
              <li><Link to="/reviews" className="hover:text-amber-300">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                123 Main Street, City Center
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                +123-456-7890
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@sultansdine.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sultan's Dine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;