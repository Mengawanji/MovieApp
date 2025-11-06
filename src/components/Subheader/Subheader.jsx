import styles from "./styles.module.css";

function Subheader({ title }) {
    return (
        <div>
            <h2 className={styles["section-title"]}>{title}</h2>
        </div>
    );
}

export default Subheader;