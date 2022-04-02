import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout';
//import { NotFound } from '../pages/NotFound';

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

export const App = () => {
  return (
    <Suspense fallback={<h2>Load....</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
