
import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold my-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
