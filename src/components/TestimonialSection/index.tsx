import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function TestimonialSection(): ReactNode {
  return (
    <section className={styles.testimonial}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col--12 text--center">
            <h2 className={styles.testimonialText}>
              "An intuitive solution to a common problem that we all face,
              wrapped up in a single app!"
            </h2>
            <img
              src="/img/tnw-logo.svg"
              alt="TNW Logo"
              className={styles.testimonialLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
