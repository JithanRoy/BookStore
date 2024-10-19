
import React from 'react';

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="inline-flex items-center -space-x-px">
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? 'bg-blue-500 text-white' : ''}>
              <button onClick={() => paginate(number)} className="px-3 py-2 border">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
