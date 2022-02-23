import { useState, useEffect } from 'react';
import * as API from '../../services/movies-api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const reviews = await API.fetchGetMoviesReviews(movieId);
        setReviews(reviews);
        console.log(reviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, content, author }) => (
          <div key={id}>
            <p>{author}:</p>
            <p>"{content}"</p>
          </div>
        ))
      ) : (
        <p>We do not have reviews for this movie.</p>
      )}
    </>
  );
};
