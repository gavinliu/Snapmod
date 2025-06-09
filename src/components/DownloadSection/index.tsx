import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function DownloadSection(): ReactNode {
  return (
    <section className={styles.download}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.downloadTitle}>Get the app now!</h2>
          <div className={styles.downloadBadges}>
            <a href="#!" className={styles.badgeLink}>
              <img
                className={styles.appBadge}
                src="/img/google-play-badge.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href="#!" className={styles.badgeLink}>
              <img
                className={styles.appBadge}
                src="/img/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}