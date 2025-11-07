import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import Subheader from "../components/Subheader/Subheader";
import { getPopularMovies } from "../Utils/api";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import Genre from "../components/Category/Genre";
import "../styles/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies.slice(0, 5)); 
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * Math.min(15, movies.length));
        setFeaturedIndex(randomIndex);
      }, 10000);

      return () => clearInterval(interval); // cleanup interval
    }
  }, [movies]);

  return (
    <>
      {!loading && movies.length > 0 && (
        <FeaturedMovie movie={movies[featuredIndex]} />
      )}

      <div className="home">
        <Subheader title="Latest & Trending" />
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.slice(0, 5).map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
      <Genre ID={10749} subtitle={"Action"} />
      <Genre ID={18} subtitle={"Romance & Drama"} />
      <Genre ID={35} subtitle={"Comedy"} />
    </>
  );
}

export default Home;
