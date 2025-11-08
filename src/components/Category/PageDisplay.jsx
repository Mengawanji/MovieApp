import MovieCard from "../MovieCard/MovieCard";
import { useState, useEffect } from "react";
import Subheader from "../Subheader/Subheader";
import { getMovie } from "../../Utils/api";
import "../../styles/Home.css";

export default function PageDisplay ({DES, subtitle}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playNow = async () => {
      try {
        const currentMovies = await getMovie(DES);
        setMovies(currentMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    playNow();
  }, []);

  return (
    <>
    <div className="genre">
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