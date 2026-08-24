import {
  Mail,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* OFFICE CONTACT */}
        <div>
          <h3>Office Contact</h3>

          <p>
            <MapPin />
            <span>
              Kogo Holdings,
              Langata Road,
              Nairobi, Kenya
            </span>
          </p>

          <p>
            <Phone />
            <a href="tel:+254722158950">
              +254 722 158950
            </a>
          </p>

          <p>
            <Phone />
            <a href="tel:+254723049800">
              +254 723 049800
            </a>
          </p>

          <p>
            <Mail />
            <a href="mailto:Flomatexsbuildingconstractor@gmail.com">
              Flomatexsbuildingconstractor@gmail.com
            </a>
          </p>

          {/* SOCIAL LINKS */}
          <div className="socials">

            <a
              href="#"
              aria-label="Facebook"
              className="social-facebook"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="social-instagram"
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="social-linkedin"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="social-twitter"
            >
              𝕏
            </a>

            <a
              href="#"
              aria-label="Website"
              className="social-website"
            >
              <Globe />
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3>Services Areas</h3>

          <Link to="/services">
            Building Construction
          </Link>

          <Link to="/services">
            House Renovation
          </Link>

          <Link to="/services">
            Architecture Design
          </Link>

          <Link to="/services">
            Interior Design
          </Link>

          <Link to="/services">
            Fixing & Support
          </Link>

          <Link to="/services">
            Painting
          </Link>
        </div>

        {/* USEFUL PAGES */}
        <div>
          <h3>Useful Pages</h3>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/team">
            Our Team
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/about#faq">
            FAQ
          </Link>

          <Link to="/post">
            Post Page
          </Link>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3>Newsletter</h3>

          <p>
            Stay informed and receive the latest
            updates and news directly to your inbox.
          </p>

          <form
            className="newsletter"
            onSubmit={(event) => {
              event.preventDefault();

              alert(
                "Thank you for subscribing!"
              );

              event.target.reset();
            }}
          >
            <input
              type="email"
              placeholder="Email here"
              required
            />

            <button type="submit">
              Submit
            </button>
          </form>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          © Flomatexs Construction Limited FCL,
          All Right Reserved.
        </span>

        <span>
          Designed By DNX EMPIRE
        </span>

      </div>
    </footer>
  );
}