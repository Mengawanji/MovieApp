import { useState } from 'react';
import { searchMovies} from '../../Utils/api';
import MovieCard from '../MovieCard/MovieCard';
import styles from "./styles.module.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
    
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to search movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (error) setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for Movies, Series..."
            className={styles["search-input"]}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button 
            type="submit" 
            className={styles.searchButton}
            disabled={loading}
          >
            <i className="fa fa-search" aria-hidden="true"></i> {/* Fixed className */}
          </button>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading">Loading...</div>}

      {!loading && movies.length > 0 && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      {!loading && searchQuery && movies.length === 0 && !error && (
        <div className="no-results">No movies found for "{searchQuery}"</div>
      )}
    </div>
  );
}