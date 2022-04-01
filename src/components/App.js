import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
//import { Cast, Reviews } from '../pages';

import { Layout } from './Layout';

const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    })),
  );
};
//const HomePage = lazy(() => import('../pages/HomePage'));
//const MoviesPage = lazy(() => import('../pages/MoviesPage'));
//const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
//const Cast = lazy(() => import('../pages/Cast'));
//const Reviews = lazy(() => import('../pages/Reviews'));
const HomePage = createChunk('HomePage');
const MoviesPage = createChunk('MoviesPage');
const MovieDetailsPage = createChunk('MovieDetailsPage');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');

const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
//import axios from 'axios';
const axios = require('axios');
export const fetchGetMoviesReviews = async id => {
  const reviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );
  return reviews.data.results;
};

export const App = () => {
  return (
    <Suspense fallback={<h2>Load....</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/*" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
