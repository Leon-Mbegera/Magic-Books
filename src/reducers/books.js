import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Mediation and Assassination',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Naked in Death',
      category: 'Romance',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
