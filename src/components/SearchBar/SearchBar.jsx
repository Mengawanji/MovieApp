import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const trimmedQuery = searchQuery.trim();

      if (trimmedQuery) {
        navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      } else {
        if (location.pathname.startsWith("/search")) {
          navigate("/");
        }
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, navigate, location.pathname]);

  useEffect(() => {
  // If the user navigates away from the search page, reset the input
  if (!location.pathname.startsWith("/search")) {
    setSearchQuery("");
  }
}, [location.pathname]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.searchForm}
    >
      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="Search for Movies, Series..."
          className={styles["search-input"]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className={styles.searchButton}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
}
