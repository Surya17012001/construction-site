import PageHeader from "../components/PageHeader";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" />

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

                  <a
                    href="/services/gallery"
                    className="plus"
                  >
                    +
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}