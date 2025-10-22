import styles from "./styles.module.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMovieStore } from '../../Utils/store';
import Pagination from "../Pagination/Pagination";

export default function MovieList() {
  const { 
    movies, 
    loading, 
    error, 
    fetchMovies, 
    currentPage, 
    totalPages,
    favorites,
    toggleFavorite 
  } = useMovieStore();
  
  useEffect(() => {
    fetchMovies('', currentPage);
  }, [currentPage, fetchMovies]);
  
  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  
  return (
    <div className={styles.movieListContainer}>
      <h1 className={styles.movieListTitle}>Popular Movies</h1>
      
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <Link to={`/movie/${movie.id}`}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className={styles.moviePoster}
              />
            </Link>
            <div className={styles.movieInfo}>
              <div className={styles.movieHeader}>
                <Link to={`/movie/${movie.id}`} className={styles.movieTitle}>
                  {movie.title}
                </Link>
                <button 
                  onClick={() => toggleFavorite(movie)}
                  className={`favoriteButton ${favorites.some(fav => fav.id === movie.id) ? 'active' : ''}`}
                >
                  {favorites.some(fav => fav.id === movie.id) ? '★' : '☆'}
                </button>
              </div>
              <p className={styles.movieDate}>{movie.release_date}</p>
              <p className={styles.movieOverview}>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchMovies('', page)}
      />
    </div>
  );
}

