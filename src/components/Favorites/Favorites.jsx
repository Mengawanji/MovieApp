import styles from "./styles.module.css"
import { useMovieContext } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import Subheader from "../Subheader/Subheader";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className={styles.container}>
      <Subheader title={"Your Favorite"}/>
      <div className={styles.favorites}>
        
        <div className={styles["movies-grid"]}>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
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
