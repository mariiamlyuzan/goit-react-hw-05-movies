import { useState, useEffect, useRef } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import * as API from '../../services/movies-api';
import { MovieDetailsPage } from '../MovieDetailsPage/MovieDetailsPage';
import { List } from './MoviesPage.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams('');

  const query = searchParams.get('query') || '';
  console.log(searchParams.get('query'));

  const inputEl = useRef(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMovies() {
      try {
        const movies = await API.fetchSearchMovies(query);
        setMovies(movies);
        if (movies.length === 0) {
          return toast.error(
            `Search result not successful.Enter the correct movie name.`,
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: inputEl.current.value.toLowerCase() });
  };

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movies..."
          ref={inputEl}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <List to={`${movie.id}`}>{movie.original_title}</List>
            <Routes>
              <Route path="movies" element={movie.original_title} />
              <Route path=":movieId" element={<MovieDetailsPage />} />
            </Routes>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};
