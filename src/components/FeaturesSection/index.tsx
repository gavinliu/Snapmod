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
    title: "机型适配",
    description:
      "从 iOS 到 Android，适配主流机型，让你的截图在任何设备上都完美呈现！",
  },
  {
    icon: "✨",
    title: "极简美学",
    description:
      "Material Design 3 加持，每一个像素都经过精心雕琢，颜值爆表到让人忍不住多看几眼！",
  },
  {
    icon: "🎨",
    title: "智能换肤",
    description:
      "AI 智能识别截图主题色，自动切换最佳主题配色，打造独一无二的专属视觉盛宴！",
  },
  {
    icon: "🌈",
    title: "魔法背景",
    description:
      "告别单调背景！自动生成千变万化的模糊背景，让你的截图瞬间变身艺术品！",
  },
  {
    icon: "⚡",
    title: "闪电速度",
    description:
      "毫秒级响应，丝滑到让你怀疑人生！再也不用等待，灵感来了就能立刻捕捉！",
  },
  {
    icon: "🎯",
    title: "两步导出",
    description:
      "革命性的两步操作，从截图到导出只需眨眼功夫，简单到连奶奶都能轻松上手！",
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
