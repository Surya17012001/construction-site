import PageHeader from "../components/PageHeader";

export default function Post() {
  return (
    <>
      <PageHeader title="Post Page" />

      <article className="post section">

        <div className="container narrow">

          <img
            src="/img/single.jpg"
            alt="Construction"
          />

          <h1>
            Navigating the Ever-Evolving Landscape
            of Construction: Challenges and
            Innovations
          </h1>

          <p>
            In the realm of construction, where every
            project is a symphony of design, engineering,
            and execution, navigating the ever-evolving
            landscape of construction presents both
            challenges and opportunities.
          </p>

          <p>
            The construction industry continues to evolve
            with new technologies, materials, techniques
            and changing customer expectations.
          </p>

        </div>

      </article>
    </>
  );
}