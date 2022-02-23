import { useState, useEffect } from 'react';

import * as API from '../../services/movies-api';
import { List } from './HomePage.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await API.fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <List to={`/movies/${id}`}>{original_title}</List>
          </li>
        ))}
      </ul>
    </>
  );
};
