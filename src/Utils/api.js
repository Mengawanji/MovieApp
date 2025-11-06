// const API_KEY = import.meta.env.VITE_API_KEY

const API_KEY = "9c5638ce75e1fb11e4073a6411597f6d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};

export const seriesDisplay = async () => {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const MoviePlay = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};


export const upComing = async () => {
  const response = await fetch(`${BASE_URL}/movie/movie/upcoming?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const topRated = async () => {
  const response = await fetch(`${BASE_URL}/movie/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
