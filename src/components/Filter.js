import React, { useState } from 'react';
import MovieList from './MovieList';

const Filter = () => {
  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={filter.title}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Rating"
        name="rating"
        value={filter.rating}
        onChange={handleChange}
      />
      <MovieList filter={filter} />
    </div>
  );
};

export default Filter;

