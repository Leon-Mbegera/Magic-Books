import React from 'react';

const filterCategories = ['All', 'Action', 'Romance', 'Mystery', 'History', 'Kids', 'Sci-Fi'];

const CategoryFilter = () => (
  <select>
    {filterCategories.map((filtCat) => (
      <option key="filtCat" value="filtCat">{filtCat}</option>))}
  </select>
);

export default CategoryFilter;
