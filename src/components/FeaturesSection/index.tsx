import { translate } from "@docusaurus/Translate";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  icon: string;
  titleId: string;
  titleMessage: string;
  descriptionId: string;
  descriptionMessage: string;
};

const features: FeatureItem[] = [
  {
    icon: "📱",
    titleId: "homepage.features.title.device-compatibility",
    titleMessage: "Device Compatibility",
    descriptionId: "homepage.features.description.device-compatibility",
    descriptionMessage:
      "From iOS to Android, compatible with mainstream models, making your screenshots perfect on any device!",
  },
  {
    icon: "✨",
    titleId: "homepage.features.title.minimal-design",
    titleMessage: "Minimal Design",
    descriptionId: "homepage.features.description.minimal-design",
    descriptionMessage:
      "Powered by Material Design 3, every pixel is carefully crafted, so stunning you can't help but look twice!",
  },
  {
    icon: "🎨",
    titleId: "homepage.features.title.smart-theming",
    titleMessage: "Smart Theming",
    descriptionId: "homepage.features.description.smart-theming",
    descriptionMessage:
      "AI intelligently recognizes screenshot theme colors, automatically switches to the best theme, creating a unique visual feast!",
  },
  {
    icon: "🌈",
    titleId: "homepage.features.title.magic-background",
    titleMessage: "Magic Background",
    descriptionId: "homepage.features.description.magic-background",
    descriptionMessage:
      "Say goodbye to boring backgrounds! Automatically generates ever-changing blurred backgrounds, instantly turning your screenshots into art!",
  },
  {
    icon: "⚡",
    titleId: "homepage.features.title.lightning-speed",
    titleMessage: "Lightning Speed",
    descriptionId: "homepage.features.description.lightning-speed",
    descriptionMessage:
      "Millisecond response, so smooth you'll question reality! No more waiting, capture inspiration instantly!",
  },
  {
    icon: "🎯",
    titleId: "homepage.features.title.two-step-export",
    titleMessage: "Two-Step Export",
    descriptionId: "homepage.features.description.two-step-export",
    descriptionMessage:
      "Revolutionary two-step operation, from screenshot to export in the blink of an eye, so simple even grandma can master it!",
  },
];

function Feature({
  icon,
  titleId,
  titleMessage,
  descriptionId,
  descriptionMessage,
}: FeatureItem) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>
          {translate({
            id: titleId,
            message: titleMessage,
            description: `Feature title: ${titleMessage}`,
          })}
        </h3>
        <p className={styles.featureDescription}>
          {translate({
            id: descriptionId,
            message: descriptionMessage,
            description: `Feature description: ${titleMessage}`,
          })}
        </p>
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
                    src="img/render_1749455127506.png"
                    alt="App Screenshot 1"
                    className={styles.stackedImage}
                  />
                  <img
                    src="img/render_1749454347432.png"
                    alt="App Screenshot 2"
                    className={styles.stackedImage}
                  />
                  <img
                    src="img/render_1749454486512.png"
                    alt="App Screenshot 3"
                    className={styles.stackedImage}
                  />
                  <img
                    src="img/render_1749454819632.png"
                    alt="App Screenshot 4"
                    className={styles.stackedImage}
                  />
                  <img
                    src="img/render_1749455059269.png"
                    alt="App Screenshot 5"
                    className={styles.stackedImage}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col col--8">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
