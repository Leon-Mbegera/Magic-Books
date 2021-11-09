import React, { useState } from 'react';
import { createBook } from '../actions/index';
import store from '../reducers';

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

  const handleSubmit = (e) => {
    store.dispatch(createBook(state));
    setState({
      title: '',
      category: '',
    });
    e.preventDefault();
  };

  const Categories = ['Action', 'Romance', 'Mystery', 'History', 'Kids', 'Sci-Fi'];
  const { title, category } = state;
  return (
    <form className="book-form">
      <input type="text" name="title" placeholder="Add title" autofill="off" value={title} onChange={handleChange} />
      <select name="category" value={category} onChange={handleChange}>
        <option value="">Select</option>
        {Categories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>
      <button type="submit" onClick={handleSubmit}>Add book</button>
    </form>
  );
};

export default BooksForm;
