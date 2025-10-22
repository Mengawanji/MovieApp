import { useState } from 'react';
import { useMovieStore } from '../../Utils/store';
import { searchMovies,getPopularMovies  } from '../../Utils/api';
import styles from "./styles.module.css"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchMovies = useMovieStore((state) => state.fetchMovies);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for Movies, Series..."
          className={styles["search-input"]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      <button 
        type="submit" 
        className={styles.searchButton}
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
      </div>
    </form>
  );
}