import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useParams, useNavigate } from 'react-router-dom';
import * as API from '../../services/movies-api';
import { DataMovie, Title, List, Button } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const url = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movie = await API.fetchMoviesDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      {movie && (
        <div>
          <div>
            {' '}
            <img src={url + movie.poster_path} alt={movie.original_title} />
          </div>
          <Title>{movie.original_title}</Title>
          <DataMovie>
            <div>
              <p>Vote / Votes</p>
              <p>Popularity</p>
              <p>Original Title</p>
              <p>Genre</p>
            </div>
            <div>
              <p>
                <span>{movie.vote_average}</span>
                <span>/</span>
                <span>{movie.vote_count}</span>
              </p>
              <p>{movie.popularity}</p>
              <p>{movie.original_title}</p>
              {movie.genres.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </div>
          </DataMovie>
          <Title>ABOUT</Title>
          <p>{movie.overview}</p>
          <div>
            <List to="cast">Cast</List> <br />
            <List to="reviews">Reviews</List>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};
