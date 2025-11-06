import styles from "./styles.module.css"
import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className={styles.favorites}>
        <h2>Your Favorites</h2>
        <div className={styles["movies-grid"]}>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles["favorites-empty"]}>
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
