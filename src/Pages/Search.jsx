// src/pages/SearchPage/SearchPage.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../Utils/api";
import Subheader from "../components/Subheader/Subheader";
import MovieCard from "../components/MovieCard/MovieCard";
import "../styles/Home.css";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch search results.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="searchPage">
      <Subheader title={query}/>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p>No movies found for.</p>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
