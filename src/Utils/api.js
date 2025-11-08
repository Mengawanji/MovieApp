const API_KEY = "9c5638ce75e1fb11e4073a6411597f6d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovie = async (DES) => {
  const response = await fetch(`${BASE_URL}/${DES}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};

export const movieGenre = async (ID) => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${ID}`);
  const data = await response.json();
  return data.results;
};
