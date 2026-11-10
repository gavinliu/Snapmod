interface Content {
  title: string;
  intro: string;
  quote: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  download: string;
  features: { icon: string; title: string; text: string }[];
  reviews: { name: string; text: string }[];
}

function Downloads() {
  return (
    <div className="snap-downloads">
      <a
        href="https://play.google.com/store/apps/details?id=cn.gavinliu.snapmod"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/img/google-play-badge.svg" alt="Get it on Google Play" />
      </a>
      <a
        href="https://apps.apple.com/us/app/snapmod/id6746100828"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/img/app-store-badge.svg" alt="Download on the App Store" />
      </a>
    </div>
  );
}

export default function Home({
  content,
  chinese,
}: {
  content: Content;
  chinese: boolean;
}) {
  return (
    <div className="snap-home">
      <header className="masthead">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col--6">
              <div className="heroContent">
                <h1 className="heroTitle">{content.title}</h1>
                <p className="heroSubtitle">{content.intro}</p>
                <Downloads />
              </div>
            </div>
            <div className="col col--6">
              <div className="deviceMockup">
                <div className="deviceWrapperHero">
                  <img
                    src="/img/render_1749451420742.png"
                    alt={
                      chinese
                        ? 'Snapmod 带壳截图示例'
                        : 'Screenshot framed with Snapmod'
                    }
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="testimonial">
        <div className="container text--center">
          <h2 className="testimonialText">{content.quote}</h2>
          <img
            src="/img/tnw-logo.svg"
            alt="TNW"
            className="testimonialLogo"
            loading="lazy"
          />
        </div>
      </section>
      <section className="features" aria-label={chinese ? '功能' : 'Features'}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col col--4">
              <div className="featuresDevice">
                <div className="deviceWrapperStack">
                  <div
                    className="stackedImages"
                    aria-label={chinese ? '截图展示' : 'Screenshot gallery'}
                  >
                    {[
                      '1749455127506',
                      '1749454347432',
                      '1749454486512',
                      '1749454819632',
                      '1749455059269',
                    ].map((id, index) => (
                      <img
                        className="stackedImage"
                        key={id}
                        src={`/img/render_${id}.png`}
                        alt={`${chinese ? '带壳截图示例' : 'Screenshot mockup'} ${index + 1}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--8">
              <div className="row">
                {content.features.map((feature) => (
                  <article
                    className="col col--6 margin-bottom--lg text--center"
                    key={feature.title}
                  >
                    <div className="featureIcon" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <h3 className="featureTitle">{feature.title}</h3>
                    <p className="featureDescription">{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <h2 className="reviewsTitle">{content.reviewsTitle}</h2>
            <p className="reviewsSubtitle">{content.reviewsSubtitle}</p>
          </div>
          <div className="row">
            {content.reviews.map((review) => (
              <div className="col col--4 margin-bottom--lg" key={review.name}>
                <figure className="reviewCard">
                  <figcaption className="reviewHeader">
                    <span className="reviewAvatar" aria-hidden="true">
                      {review.name[0]}
                    </span>
                    <div className="reviewMeta">
                      <h4 className="reviewName">{review.name}</h4>
                      <div
                        className="starRating"
                        aria-label={chinese ? '五星' : '5 stars'}
                      >
                        {Array.from({ length: 5 }, (_, index) => (
                          <span
                            className="starFilled"
                            key={index}
                            aria-hidden="true"
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="reviewComment">
                    {review.text}
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="download">
        <div className="container text--center">
          <h2 className="downloadTitle">{content.download}</h2>
          <Downloads />
        </div>
      </section>
    </div>
  );
}
