import styles from "./styles.module.css";
import { CirclePlay, CircleChevronRight} from "lucide-react";
import { useMovieContext } from "../../contexts/MovieContext"


function FeaturedMovie({movie}) {

    const displayOverview = `${movie?.overview}`

    function limitOverviewByWords(text, maxWords) {
        if (!text || text.trim() === '') {
            return '';
        }
        const words = text.split(/\s+/).filter(Boolean);

        if (words.length <= maxWords) {
            return text;
        }
        const truncatedWords = words.slice(0, maxWords);

        return truncatedWords.join(' ') + ' . . .';
    }

    const movieOverview =  limitOverviewByWords(displayOverview, 30)

    return (
        <div className={styles["featured-container"]}>
        <div className={styles["featured-movie"]}>
            <h1 className={styles["movie-title"]}>
                {movie?.original_title?.toUpperCase()}
            </h1>
            <div className={styles["movie-info"]}>
                <div className={styles["cbfc-rating"]}>Language : {movie?.original_language} </div>
                <div className={styles["movie-genres"]}> Vote : {movie?.vote_count}</div>
            </div>
            <p className={styles["movie-description"]}>
                {movieOverview}
            </p>
            <div className={styles["movie-actions"]}>
                <button className={styles["button"] + " " + styles["btn-primary"]}> 
                    <CirclePlay size={20}/> Watch Now
                </button>

                <button className={styles["button"] + " " + styles["btn-secondary"]}>
                     <CircleChevronRight size={20}/> More Info
                </button>
            </div> 
        </div>
        </div>
    );
}

export default FeaturedMovie;
