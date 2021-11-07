import React, { useState } from 'react';

const BooksForm = () => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const Categories = ['Action', 'Romance', 'Mystery', 'History', 'Wildlife', 'Science'];
  const { title, category } = state;
  return (
    <form className="book-form">
      <input type="text" id="title" placeholder="Add title" autofill="off" value={title} onChange={handleChange} />
      <select id="category">
        {Categories.map((category, idx) => <option key={idx.id}>{category}</option>)}
      </select>
      <button type="submit">Add book</button>
    </form>
  );
};

export default BooksForm;
