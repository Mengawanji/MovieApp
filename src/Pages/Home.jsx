import { useState, useEffect } from "react";
import { getMovie } from "../Utils/api";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import Genre from "../components/Category/Genre";
import DisplayMovie from "../components/Category/DisplayMovie";
import "../styles/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getMovie("movie/popular");
        setMovies(popularMovies.slice(0, 5)); 
      } catch (err) {
        console.log(error);
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
        const randomIndex = Math.floor(Math.random() * Math.min(20, movies.length));
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

      <DisplayMovie DES={"movie/popular"} subtitle={"Latest & Trending"} />
      <DisplayMovie DES={"movie/top_rated"} subtitle={"Top Search"} />
      <DisplayMovie DES={"movie/upcoming"} subtitle={"Up Coming"} />
      <Genre ID={10749} subtitle={"Action"} />
      <Genre ID={18} subtitle={"Romance"} />
      <Genre ID={35} subtitle={"Comedy"} />
      <Genre ID={16} subtitle={"Animation"} />
      <Genre ID={18} subtitle={"Drama"} />
      <Genre ID={12} subtitle={"Adventure"} />
      <Genre ID={80} subtitle={"Crime"} />
      <Genre ID={99} subtitle={"Documentary"} />
      <Genre ID={14} subtitle={"Fantacy"} />
      <Genre ID={27} subtitle={"Horror"} />
    </>
  );
}

export default Home;
