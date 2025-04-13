import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-yellow-300">Sultan's</span> Dine
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// NavLink component with active state styling
const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="hover:text-yellow-300 transition-colors duration-300 font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;