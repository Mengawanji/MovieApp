import MovieCard from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import { getMovie } from "../../Utils/api";
import Subheader from "../Subheader/Subheader";
import "../../styles/Home.css";

export default function DisplayMovie({DES, subtitle}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const getDisplayMovies = await getMovie(DES);
        setMovies(getDisplayMovies.slice(0, 5));
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
    <div className="home">
        <Subheader title={subtitle}/>
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

// All Category components use styles in Home.css