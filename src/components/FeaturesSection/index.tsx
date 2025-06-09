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
