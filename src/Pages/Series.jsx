import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import Subheader from "../components/Subheader/Subheader";
import { seriesDisplay } from "../Utils/api";
import "../styles/Home.css";


export default function Series() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Display  = async () => {
      try {
        const seriesMovies = await seriesDisplay();
        setMovies(seriesMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

     Display ();
  }, []);

  return (
    <>
    <div className="home">
        <Subheader title="Series"/>
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