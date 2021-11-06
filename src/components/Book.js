import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => (

  <tbody>
    {books.map((bk) => (
      <tr key={bk.id}>
        <td>{bk.id}</td>
        <td>{bk.title}</td>
        <td>{bk.category}</td>
      </tr>
    ))}
  </tbody>
);

Book.propTypes = {
  books: PropTypes.shape.isRequired,
};

export default Book;
