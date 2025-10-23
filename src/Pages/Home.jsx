import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import Subheader from "../components/Subheader/Subheader";
import { getPopularMovies } from "../Utils/api";
import "../styles/Home.css";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
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

  return (
    <>
    <FeaturedMovie/>
    <div className="home">
        <Subheader title="Latest & Trending"/>
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

export default Home;
