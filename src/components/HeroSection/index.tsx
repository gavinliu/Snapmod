import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function HeroSection(): ReactNode {
  return (
    <header className={styles.masthead}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col--6">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Snapmod - Screenshot Mockups</h1>
              <p className={styles.heroSubtitle}>
                Lets you to easily add your screenshots into device bezels.
                <br />
                You can use it to share your screenshots, wallpapers or app
                mockups
              </p>

              <div className={styles.appBadges}>
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
          <div className="col col--6">
            <div className={styles.deviceMockup}>
              <div className={styles.deviceWrapper}>
                <div className={styles.device}>
                  <div className={styles.screen}>
                    <video muted autoPlay loop className={styles.demoVideo}>
                      <source src="/img/demo-screen.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
