import { Link } from "react-router-dom";

import Stats from "../components/Stats";
import { services } from "../data/siteData";

const slides = [
  {
    image: "/img/home-slide-1.jpg",
    small: "We Are Professional",
    title: "For Your Dream Projects",
  },

  {
    image: "/img/home-slide-2.jpg",
    small: "Professional Builder",
    title: "We Build Your Home",
  },

  {
    image: "/img/home-slide-3.jpg",
    small: "We Are Trusted",
    title: "For Your Dream Home",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">

        {slides.map((slide, index) => (
          <div
            className={`hero-slide slide-${index}`}
            key={slide.title}
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(0,0,0,.7),
                  rgba(0,0,0,.2)
                ),
                url(${slide.image})
              `,
            }}
          >
            <div className="hero-content">

              <p>{slide.small}</p>

              <h1>
                {slide.title}
              </h1>

              <a
                className="btn whatsapp"
                href="https://wa.me/254722158950"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat!
              </a>

            </div>
          </div>
        ))}

      </section>

      {/* MISSION / VISION / GOAL */}
      <section className="features">

        <div className="feature">
          <span>◆</span>

          <div>
            <h3>Mission</h3>

            <p>
              To deliver exceptional construction
              services with integrity, professionalism,
              and innovation, exceeding client
              expectations and contributing to the
              sustainable development of communities.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>◆</span>

          <div>
            <h3>Vision</h3>

            <p>
              To be recognized as a leader in the
              construction industry, setting new
              standards of excellence through our
              commitment to quality, safety, and
              environmental sustainability.
            </p>
          </div>
        </div>

        <div className="feature">
          <span>◆</span>

          <div>
            <h3>Goal</h3>

            <p>
              Customer Satisfaction: Ensure client
              satisfaction by delivering projects on
              time, within budget, and to the highest
              quality standards.
            </p>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section">

        <div className="container two-col">

          <img
            className="rounded-img"
            src="/img/proj3/IMG-20240313-WA0056.jpg"
            alt="Construction project"
          />

          <div>

            <p className="eyebrow">
              Welcome to Flomatexs Construction Limited
            </p>

            <h2>
              15 Years Experience
            </h2>

            <p>
              Flomatexs Construction Limited is a
              leading construction company with a rich
              history of delivering high-quality projects
              across diverse sectors.
            </p>

            <p>
              With over 15 years of experience in the
              industry, we have established ourselves as
              a trusted partner for clients seeking
              excellence in construction.
            </p>

            <p>
              Our team of skilled professionals brings
              expertise, innovation, and a passion for
              excellence to every project we undertake.
            </p>

            <Link
              className="btn"
              to="/about"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      <Stats />

      {/* SERVICES */}
      <section className="section">

        <div className="container">

          <div className="section-heading">

            <p>Our Services</p>

            <h2>
              We Provide Services
            </h2>

          </div>

          <div className="card-grid">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.title}
              >

                <div className="image-wrap">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="overlay">
                    {service.text}
                  </div>

                </div>

                <div className="card-body">

                  <h3>
                    {service.title}
                  </h3>

                  <Link
                    to="/services/gallery"
                    className="plus"
                  >
                    +
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}