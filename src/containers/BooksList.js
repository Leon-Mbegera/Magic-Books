import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (

  <table>
    <thead>
      <tr>
        <th>Book Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (<Book key={book.id} book={book} />)) }
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
});

export default connect(mapStateToProps)(BooksList);
