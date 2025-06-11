import { translate } from "@docusaurus/Translate";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type ReviewItem = {
  name: string;
  rating: number;
  comment: string;
  titleId?: string;
  commentId?: string;
};

const reviews: ReviewItem[] = [
  {
    name: "张小明",
    rating: 5,
    titleId: "homepage.reviews.user1.name",
    commentId: "homepage.reviews.user1.comment",
    comment:
      "作为一个设计师，我对这个应用简直爱不释手！Material Design 3 的设计语言真的太棒了，每个像素都经过精心雕琢。特别是智能主题功能，AI 能自动识别我截图的主题色并切换到最佳主题，省去了我手动调整的麻烦。",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    titleId: "homepage.reviews.user2.name",
    commentId: "homepage.reviews.user2.comment",
    comment:
      "As a UI/UX designer, I'm absolutely in love with this app! The Material Design 3 implementation is flawless - every pixel is meticulously crafted. The smart theming feature is a game-changer; the AI automatically detects my screenshot's color scheme and applies the perfect theme.",
  },
  {
    name: "李美丽",
    rating: 5,
    titleId: "homepage.reviews.user3.name",
    commentId: "homepage.reviews.user3.comment",
    comment:
      "真的太方便了！以前用其他应用总是要点来点去好多步骤，现在从截图到导出真的就是眨眼间的事情。而且速度超快，毫秒级响应，完全不用等待。",
  },
  {
    name: "Mike Chen",
    rating: 5,
    titleId: "homepage.reviews.user4.name",
    commentId: "homepage.reviews.user4.comment",
    comment:
      "The two-step export feature is incredibly convenient! My grandmother could literally use this app - it's that simple. Other apps require so many taps and steps, but this one goes from screenshot to export in the blink of an eye.",
  },
  {
    name: "王程序",
    rating: 5,
    titleId: "homepage.reviews.user5.name",
    commentId: "homepage.reviews.user5.comment",
    comment:
      "兼容性做得非常好！我有 iPhone 16 和 小米 14，两个设备上使用体验都很棒。截图效果都很完美。作为一个技术人员，我很欣赏这种跨平台的一致性体验。",
  },
  {
    name: "Emma Thompson",
    rating: 5,
    titleId: "homepage.reviews.user6.name",
    commentId: "homepage.reviews.user6.comment",
    comment:
      "The magic background feature is absolutely stunning! No more boring, plain backgrounds. The app automatically generates ever-changing blurred backgrounds that instantly turn my screenshots into works of art.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ name, rating, comment, titleId, commentId }: ReviewItem) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewAvatar}>
          {name.charAt(0).toUpperCase()}
        </div>
        <div className={styles.reviewMeta}>
          <h4 className={styles.reviewName}>
            {titleId
              ? translate({
                  id: titleId,
                  message: name,
                  description: `Reviewer name: ${name}`,
                })
              : name}
          </h4>
          <StarRating rating={rating} />
        </div>
      </div>
      <p className={styles.reviewComment}>
        {commentId
          ? translate({
              id: commentId,
              message: comment,
              description: `Review comment from ${name}`,
            })
          : comment}
      </p>
    </div>
  );
}

export default function ReviewsSection(): ReactNode {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center margin-bottom--lg">
            <h2 className={styles.reviewsTitle}>
              {translate({
                id: "homepage.reviews.title",
                message: "What Our Users Say",
                description: "Reviews section title",
              })}
            </h2>
            <p className={styles.reviewsSubtitle}>
              {translate({
                id: "homepage.reviews.subtitle",
                message:
                  "Join thousands of satisfied users who have transformed their screenshots",
                description: "Reviews section subtitle",
              })}
            </p>
          </div>
        </div>
        <div className="row">
          {reviews.map((review, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
