import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <span>Books</span>
        <span>Categories</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  </header>
);

export default Header;
