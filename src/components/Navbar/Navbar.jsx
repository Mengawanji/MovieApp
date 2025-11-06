import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
    return <nav className={styles["navbar"]}>
        <div className={styles["navbar-brand"]}>
            <Link to="/" className={styles["nav-link"]}> 
             <img src="src/assets/Logo.png"/> </Link>

            <Link to="/" className={styles["nav-link"]}>Home</Link>
            <Link to="/movies" className={styles["nav-link"]}>Movies</Link>
            <Link to="/series" className={styles["nav-link"]}>Series</Link>
            <Link to="/trending" className={styles["nav-link"]}>Trending</Link>
            <Link to="/favorites" className={styles["nav-link"]}>Favorites</Link>
            <Link to="/categories" className={styles["nav-link"]}>Categories</Link>
        </div>
        
        <div className={styles["navbar-links"]}>
            <SearchBar/>
            <Link to="/" className={styles["nav-link"]}> 
             <img src="src/assets/Ellipse 14.png"/> </Link>
        </div>
    </nav>
}

export default Navbar







// src="src/assets/Logo.png"
// src="src/assets/Ellipse 14.png"