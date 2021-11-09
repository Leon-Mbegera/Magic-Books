import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (

  <tr key={book.id}>
    <td>{book.id || Math.floor(Math.random() * 50)}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="submit" onClick={handleRemoveBook}>X</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
