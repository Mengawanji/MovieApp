import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import Subheader from "../components/Subheader/Subheader";
import { getPopularMovies } from "../Utils/api";
import "../styles/Home.css";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";


export default function Trending() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <>
    <div className="home">
        <Subheader title="Trending Movies"/>
        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
    </>
    
  );
}
