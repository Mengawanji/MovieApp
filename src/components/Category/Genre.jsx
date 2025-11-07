import MovieCard from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import { movieGenre } from "../../Utils/api";
import Subheader from "../Subheader/Subheader";

export default function Genre({ID, subtitle}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGenreMovies = async () => {
      try {
        const getGenreMovies = await movieGenre(ID);
        setMovies(getGenreMovies.slice(0, 5));
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadGenreMovies();
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
