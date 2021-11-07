import React, { useState } from 'react';

const BooksForm = () => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const Categories = ['Action', 'Romance', 'Mystery', 'History', 'Wildlife', 'Science'];
  return (
    <form className="book-form">
      <input type="text" placeholder="Add title" autofill="off" />
      <select>
        {Categories.map((category, idx) => <option key={idx.id}>{category}</option>)}
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};

export default BooksForm;
