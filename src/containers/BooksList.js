import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import store from '../reducers/index';
import { removeBook } from '../actions';

const BooksList = ({ books, filter }) => {
  const handleRemoveBook = (bk) => {
    store.dispatch(removeBook(bk));
  };

  let filteredBook;
  if (filter === 'All') {
    filteredBook = books;
  } else {
    filteredBook = books.filter((book) => book.category === filter);
  }

  return (
    <div>
      {filteredBook.map((book, idx) => (
        <Book
          key={book.id}
          book={book}
          handleRemoveBook={() => { handleRemoveBook(idx); }}
        />
      ))}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter: state.filterReducer,
});

export default connect(mapStateToProps)(BooksList);
