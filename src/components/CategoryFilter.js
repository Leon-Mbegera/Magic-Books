import React from 'react';
import PropTypes from 'prop-types';

const filterCategories = ['All', 'Action', 'Romance', 'Mystery', 'History', 'Kids', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <select className="drop-down" name="filter" onChange={handleFilterChange}>
    <option value="">Categories</option>
    {filterCategories.map((filtCat) => (
      <option key={filtCat} value={filtCat}>{filtCat}</option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
