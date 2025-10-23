import styles from "./styles.module.css";
import { CirclePlay, CircleChevronRight} from "lucide-react";
function FeaturedMovie() {
    return (
        <div className={styles["featured-container"]}>
        <div className={styles["featured-movie"]}>
            <h1 className={styles["movie-title"]}>
                <img src="src/assets/Spiderman.png"/> 
            </h1>
            <div className={styles["movie-info"]}>
                <div className={styles["cbfc-rating"]}>CBFC:U/A</div>
                <div className={styles["movie-genres"]}>Action • Adventure • 2h 28m</div>
            </div>
            <p className={styles["movie-description"]}>
                When a spell goes wrong, dangerous foes from other worlds start to appear, 
                forcing Peter to discover what it truly means to be Spider-Man.
            </p>
            <div className={styles["movie-actions"]}>
                <button className={styles["btn"] + " " + styles["btn-primary"]}> 
                    <CirclePlay size={20}/> Watch Now
                </button>

                <button className={styles["btn"] + " " + styles["btn-secondary"]}>
                     <CircleChevronRight size={20}/> More Info
                </button>
            </div> 
        </div>
        </div>
    );
}

export default FeaturedMovie;