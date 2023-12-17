import React, { useContext } from 'react';
import { useFilterContext } from '../context/FilterContext';


const SortBy = () => {
  const {
    setSortBy,
    setPriceRange,
    priceRange,
  } = useFilterContext();

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: +value
    }));
  };

  return (
    <div>
      <label>
        Sort by:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value=''>None</option>
          <option value='price'>Price</option>
          <option value='name'>Name</option>
          <option value='rating'>Rating</option>
        </select>
      </label>

      {setSortBy && (
        <label>
          Price Range:
          <input
            type='number'
            name='min'
            value={priceRange.min}
            onChange={handlePriceRangeChange}
          />
          <span> - </span>
          <input
            type='number'
            name='max'
            value={priceRange.max}
            onChange={handlePriceRangeChange}
          />
        </label>
      )}
    </div>
  );
};

export default SortBy;