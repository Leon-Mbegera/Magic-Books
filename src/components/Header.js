import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import store from '../reducers/index';
import { changeFilter } from '../actions/index';
import CategoryFilter from './CategoryFilter';

const Header = () => {
  const handleFilterChange = (e) => {
    store.dispatch(changeFilter(e.target.value));
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="left-side">
          <h1 className="heading">Bookstore CMS</h1>
          <span className="Books">BOOKS</span>
          <span>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </span>
        </div>
        <div className="Oval">
          <FontAwesomeIcon icon={faUser} className="Mask" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
