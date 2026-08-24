import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

const teamMembers = [
  {
    name: "Mr. Omondi",
    role: "CEO & Founder",
    image: "/img/Omosh1.jpg",
  },
  {
    name: "Lins Consult",
    role: "Architecture",
    image: "/img/lins.jpg",
  },
  {
    name: "SIMCO Consultants",
    role: "Quantity Surveyor",
    image: "/img/simco.jpg",
  },
  {
    name: "MENGI DESIGNS LTD",
    role: "Services Engineer",
    image: "/img/mengi.jpg",
  },
  {
    name: "Eng. Eric Sitienei",
    role: "Civil Engineer",
    image: "/img/engeric.jpeg",
  },
  {
    name: "Flomatexs LTD",
    role: "Contractors",
    image: "/img/flomatexs.png",
  },
];

export default function Team() {
  return (
    <>
      <PageHeader title="Our Team" />

      <section className="section">
        <div className="container">

          {/* SECTION HEADING */}
          <div className="section-heading">
            <p>Our Team</p>

            <h2>Meet Our Team</h2>
          </div>

          {/* TEAM GRID */}
          <div className="team-grid">

            {teamMembers.map((member) => (
              <article
                className="team-card"
                key={member.name}
              >
                {/* IMAGE */}
                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src =
                        "/img/flomatexs.png";
                    }}
                  />
                </div>

                {/* DETAILS */}
                <div className="team-info">

                  <h3>{member.name}</h3>

                  <p>{member.role}</p>

                  {/* SOCIAL LINKS */}
                  <div className="team-socials">

                    <a
                      href="#"
                      aria-label={`${member.name} Facebook`}
                    >
                      f
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} Instagram`}
                    >
                      ◎
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      in
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} X`}
                    >
                      𝕏
                    </a>

                  </div>

                </div>

                {/* VIEW BUTTON */}
                <Link
                  to="/contact"
                  className="team-contact"
                >
                  Contact
                  <ArrowRight size={16} />
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}