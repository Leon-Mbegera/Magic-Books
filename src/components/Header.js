import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <nav className="header-nav">
      <div className="left-side">
        <h1 className="heading">Bookstore CMS</h1>
        <span className="Books">BOOKS</span>
        <span className="Books">CATEGORIES</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  </header>
);

export default Header;
