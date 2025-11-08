import { Globe, Instagram, Twitter } from "lucide-react";
// import appStore from "../assets/appstore.png";
// import playStore from "../assets/playstore.png";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {/* Company */}
        <div className={styles["footer-section"]}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Need Help */}
        <div className={styles["footer-section"]}>
          <h4>Need Help</h4>
          <ul>
            <li><a href="#">Visit Help Center?</a></li>
            <li><a href="#">Share Feedback</a></li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className={styles["footer-section"]}>
          <h4>View Website in</h4>
          <button className="language-btn">
            <Globe size={16} />
            <span>English</span>
          </button>
        </div>

        {/* Social Media */}
        <div className={styles["footer-section"]}>
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
          </div>
        </div>

        {/* App Download */}
        <div className={styles["footer-section"]}>
          <h4>Download Our App</h4>
          <div className={styles["app-buttons"]}>
            {/* <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Google Play" /> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles["footer-bottom"]}>
        <p>© 2023 STREAM X. All Rights Reserved.</p>
        <div className={styles["footer-links"]}>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className={styles["footer-logo"]}>
          <span>STREAM</span><span className={styles["logo-x"]}>X</span>
        </div>
      </div>
    </footer>
  );
}
