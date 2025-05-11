import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    const filters = {
      category,
      minPrice,
      maxPrice,
    };
    onFilterChange(filters);
  };

  return (
    <div>
      <h2>Фильтры</h2>
      <label>
        Категория:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Минимальная цена:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Максимальная цена:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button onClick={handleFilterChange}>Применить фильтры</button>
    </div>
  );
};

export default Filters;