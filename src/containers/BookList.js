import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (

  <table>
    <thead>
      <tr>
        <th>Book Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <Book books={books} />
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
});

export default connect(mapStateToProps)(BookList);
