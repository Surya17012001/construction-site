import PageHeader from "../components/PageHeader";

const groups = [
  {
    title: "Karen Project",

    images: [
      "/img/proj1/IMG-20240307-WA0125.jpg",
      "/img/proj1/IMG-20240307-WA0130.jpg",
      "/img/proj1/proj1.jpg",
      "/img/proj1/proj2.jpg",
      "/img/proj1/IMG-20240307-WA0142.jpg",
      "/img/proj1/IMG-20240307-WA0168.jpg",
      "/img/proj1/IMG-20240307-WA0172.jpg",
      "/img/proj1/IMG-20240307-WA0176.jpg",
    ],
  },

  {
    title: "Karen Baobab Project",

    images: [
      "/img/proj2/IMG-20240307-WA0166.jpg",
      "/img/proj2/IMG-20240307-WA0138.jpg",
      "/img/proj2/IMG-20240307-WA0091.jpg",
      "/img/proj2/IMG-20240307-WA0093.jpg",
      "/img/proj2/IMG-20240307-WA0096.jpg",
      "/img/proj2/IMG-20240307-WA0099.jpg",
      "/img/proj2/IMG-20240307-WA0100.jpg",
    ],
  },

  {
    title: "Karen Baobab Estate Project",

    images: [
      "/img/proj3/IMG-20240307-WA0085.jpg",
      "/img/proj3/IMG-20240307-WA0083.jpg",
      "/img/proj3/finalll.jpg",
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <>
      <PageHeader title="Projects Showcase" />

      <section className="section">

        <div className="container">

          {groups.map((group) => (
            <div
              className="showcase"
              key={group.title}
            >

              <h2>
                {group.title}
              </h2>

              <div className="gallery">

                {group.images.map((image) => (
                  <a
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    key={image}
                  >
                    <img
                      src={image}
                      alt={group.title}
                    />
                  </a>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}