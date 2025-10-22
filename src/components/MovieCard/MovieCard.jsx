import styles from "./styles.module.css"
import { useMovieContext } from "../../contexts/MovieContext"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className={styles["movie-card"]}>
        <div className={styles["movie-poster"]}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className={styles["movie-overlay"]}>
                <button className={`${styles['favorite-btn']} ${favorite ? styles.active : ''}`} 
                onClick={onFavoriteClick} >
                    ♥
                </button>
            </div>
        </div>
        <div className={styles["movie-info"]}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard