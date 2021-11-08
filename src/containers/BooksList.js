import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import store from '../reducers/index';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books }) => {
  const handleRemoveBook = (bk) => {
    store.dispatch(removeBook(bk));
  };

  const handleFilterChange = (e) => {
    store.dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={() => { handleRemoveBook(idx); }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

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
