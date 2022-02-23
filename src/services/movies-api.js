const API_KEY = '61d280fbc4e0ab3fee827783c53f7600';
const BASE_URL = 'https://api.themoviedb.org/3/';
//import axios from 'axios';
const axios = require('axios');

export const fetchTrendingMovies = async () => {
  const movies = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  );
  return movies.data.results;
};

export const fetchSearchMovies = async query => {
  const movies = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return movies.data.results;
};

export const fetchMoviesDetails = async id => {
  const movies = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return movies.data;
};

export const fetchGetMoviesCredit = async id => {
  const movies = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  );
  return movies.data.cast;
};

export const fetchGetMoviesReviews = async id => {
  const reviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
  );
  return reviews.data.results;
};
