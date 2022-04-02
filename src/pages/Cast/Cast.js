import { useState, useEffect } from 'react';
import * as API from '../../services/movies-api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const url = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function fetchMovies() {
      try {
        const cast = await API.fetchGetMoviesCredit(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0 ? (
        cast.map(({ id, profile_path, original_name, name, character }) => {
          return (
            <ul key={id}>
              <img width="200px" src={url + profile_path} alt={original_name} />
              <li>{name}</li>
              <li>Character: {character}</li>
            </ul>
          );
        })
      ) : (
        <p>We do not have reviews for this movie.</p>
      )}
    </>
  );
};
