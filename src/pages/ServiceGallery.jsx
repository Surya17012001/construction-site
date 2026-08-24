import PageHeader from "../components/PageHeader";

const images = [
  "/img/service-1.jpg",
  "/img/service-2.jpg",
  "/img/mengi.jpg",
  "/img/service-4.jpg",
  "/img/service-5.jpg",
  "/img/painting.jpeg",
];

export default function ServiceGallery() {
  return (
    <>
      <PageHeader title="Service Gallery" />

      <section className="section">

        <div className="container">

          <div className="gallery">

            {images.map((image) => (
              <a
                href={image}
                target="_blank"
                rel="noreferrer"
                key={image}
              >
                <img
                  src={image}
                  alt="Service"
                />
              </a>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}