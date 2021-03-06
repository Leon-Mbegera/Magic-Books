const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book: {
    id: Math.floor(Math.random() * 30),
    title: book.title,
    category: book.category,
  },
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, createBook, removeBook, changeFilter,
};
