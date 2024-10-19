
import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import Pagination from './Pagination';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  useEffect(() => {
    fetch('https://gutendex.com/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data.results);
        setFilteredBooks(data.results);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredBooks(books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="container mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for books..."
        className="border p-2 my-4 w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentBooks.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalBooks={filteredBooks.length}
        booksPerPage={booksPerPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default BookList;
