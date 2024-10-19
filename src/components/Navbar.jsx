
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Bookstore</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
