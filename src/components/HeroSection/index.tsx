import { translate } from "@docusaurus/Translate";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function HeroSection(): ReactNode {
  return (
    <header className={styles.masthead}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col--6">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                {translate({
                  id: "homepage.hero.title",
                  message: "Snapmod - Screenshot Mockups",
                  description: "The title of the hero section",
                })}
              </h1>
              <p className={styles.heroSubtitle}>
                {translate({
                  id: "homepage.hero.subtitle",
                  message:
                    "Better screenshot mockup tools, easily add screenshots into device bezels. You can use it to share your screenshots, wallpapers or app mockups.",
                  description: "The subtitle of the hero section",
                })}
              </p>

              <div className={styles.appBadges}>
                <a
                  href="https://play.google.com/store/apps/details?id=cn.gavinliu.snapmod"
                  target="_blank"
                  className={styles.badgeLink}
                >
                  <img
                    className={styles.appBadge}
                    src="img/google-play-badge.svg"
                    alt="Get it on Google Play"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/snapmod/id6746100828"
                  target="_blank"
                  className={styles.badgeLink}
                >
                  <img
                    className={styles.appBadge}
                    src="img/app-store-badge.svg"
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.deviceMockup}>
              <div className={styles.deviceWrapper}>
                <img src="img/render_1749451420742.png" alt="App Screenshot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
