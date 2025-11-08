import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./styles.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles["navbar-brand"]}>
        <Link to="/" className={styles["nav-link"]}>
          <img src="src/assets/Logo.png" alt="Logo" />
        </Link>

        <Link to="/" className={styles["nav-link"]}>Home</Link>
        <Link to="/movies" className={styles["nav-link"]}>Movies</Link>
        <Link to="/series" className={styles["nav-link"]}>Series</Link>
        <Link to="/trending" className={styles["nav-link"]}>Trending</Link>
        <Link to="/favorites" className={styles["nav-link"]}>Favorites</Link>
        <Link to="/categories" className={styles["nav-link"]}>Categories</Link>
      </div>

      <div className={styles["navbar-links"]}>
        <SearchBar />
        <Link to="/" className={styles["nav-link"]}>
          <img src="src/assets/Ellipse 14.png" alt="User" />
        </Link>
      </div>
    </nav>
  );
}








// src="src/assets/Logo.png"
// src="src/assets/Ellipse 14.png"