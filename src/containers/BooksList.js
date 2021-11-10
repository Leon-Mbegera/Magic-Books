import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import store from '../reducers/index';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter }) => {
  const handleRemoveBook = (bk) => {
    store.dispatch(removeBook(bk));
  };

  const handleFilterChange = (e) => {
    store.dispatch(changeFilter(e.target.value));
  };

  let filteredBook;
  if (filter === 'All') {
    filteredBook = books;
  } else {
    filteredBook = books.filter((book) => book.category === filter);
  }

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
          {filteredBook.map((book, idx) => (
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
