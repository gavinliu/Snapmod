import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: "📱",
    title: "Device Mockups",
    description: "Ready to use HTML/CSS device mockups, no Photoshop required!",
  },
  {
    icon: "📷",
    title: "Flexible Use",
    description:
      "Put an image, video, animation, or anything else in the screen!",
  },
  {
    icon: "🎁",
    title: "Free to Use",
    description:
      "As always, this theme is free to download and use for any purpose!",
  },
  {
    icon: "✅",
    title: "Open Source",
    description:
      "Since this theme is MIT licensed, you can use it commercially!",
  },
];

function Feature({ icon, title, description }: FeatureItem) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col--4">
            <div className={styles.featuresDevice}>
              <div className={styles.deviceWrapper}>
                <div className={styles.stackedImages}>
                  <img
                    src="/img/render_1749455127506.png"
                    alt="App Screenshot 1"
                    className={styles.stackedImage}
                  />
                  <img
                    src="/img/render_1749454347432.png"
                    alt="App Screenshot 2"
                    className={styles.stackedImage}
                  />
                  <img
                    src="/img/render_1749454486512.png"
                    alt="App Screenshot 3"
                    className={styles.stackedImage}
                  />
                  <img
                    src="/img/render_1749454819632.png"
                    alt="App Screenshot 4"
                    className={styles.stackedImage}
                  />
                  <img
                    src="/img/render_1749455059269.png"
                    alt="App Screenshot 5"
                    className={styles.stackedImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col col--8">
            <div className="row">
              {features.map((feature, idx) => (
                <Feature key={idx} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
