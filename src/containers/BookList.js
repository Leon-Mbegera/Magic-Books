import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (

  <table>
    <tr>
      <th>Book Id</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <Book books={books} />
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf,
};

BookList.defaultProps = {
  books: [],
};
