import PageHeader from "../components/PageHeader";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const submitForm = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your message has been submitted."
    );
  };

  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <p>
              Get In Touch
            </p>

            <h2>
              For Any Query
            </h2>

          </div>

          <div className="contact-grid">

            <div>

              <div className="contact-item">
                <MapPin />

                <div>
                  <h3>Location</h3>

                  <p>
                    Kogo holdings langata road,
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <Phone />

                <div>
                  <h3>Phone</h3>

                  <p>
                    +254 722 158950
                    <br />
                    +254 723 049800
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <Mail />

                <div>
                  <h3>Email</h3>

                  <p>
                    Flomatexsbuildingconstractor@gmail.com
                  </p>
                </div>
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={submitForm}
            >

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                rows="7"
                placeholder="Message"
                required
              />

              <button className="btn">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}