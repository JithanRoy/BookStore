
import React, { useState } from 'react';

const BookItem = ({ book }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlisted) {
      const updatedWishlist = wishlist.filter(item => item.id !== book.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      wishlist.push(book);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  };

  return (
    <div className="border p-4 rounded">
      <img src={book.formats['image/jpeg']} alt={book.title} className="w-full h-48 object-cover"/>
      <h2 className="text-lg font-bold mt-2">{book.title}</h2>
      <p>{book.authors.map(author => author.name).join(', ')}</p>
      <button onClick={toggleWishlist} className="mt-2">
        {wishlisted ? '💖' : '♡'}
      </button>
    </div>
  );
};

export default BookItem;
