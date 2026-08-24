import { useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import { projects } from "../data/siteData";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    projects.filter((project) => {
      if (filter === "all") return true;

      return project.status === filter;
    });

  return (
    <>
      <PageHeader title="Our Projects" />

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <p>Our Projects</p>

            <h2>
              Visit Our Projects
            </h2>

          </div>

          <div className="filters">

            <button
              className={
                filter === "all"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={
                filter === "complete"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setFilter("complete")
              }
            >
              Complete
            </button>

            <button
              className={
                filter === "running"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setFilter("running")
              }
            >
              Running
            </button>

          </div>

          <div className="project-grid">

            {filteredProjects.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div>

                  <h3>
                    {project.title}
                  </h3>

                  <Link
                    className="plus"
                    to="/projects/showcase"
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