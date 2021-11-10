import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import './App.css';

const App = () => (
  <div className="BookStore-CMS">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);
export default App;
