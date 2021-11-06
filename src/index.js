import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 40),
      title: 'Mediation and Assassination',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 40),
      title: 'Naked in Death',
      category: 'Romance',
    },
  ],
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement,
);
