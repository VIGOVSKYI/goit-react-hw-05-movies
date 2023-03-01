import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '36c444871f3c4ccb3f8770d789f46dd7';

export const fetchMovieTrending = async () => {
const {data} = await axios
.get(`${baseURL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`)
return data.results
};

export const fetchMovieBySearchQuery = (searchQuery) => {
  return axios
    .get(
      `${baseURL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    )
    .then(response => response.data.results);
};

export const fetchMovieDetails = (id) => {
  return axios
    .get(`${baseURL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const fetchCast = (movieId) => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
};

export const fetchReview = (movieId) => {
  return axios
    .get(
      `${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data.results);
};
