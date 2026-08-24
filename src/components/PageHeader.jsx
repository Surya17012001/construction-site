import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  return (
    <section className="page-header">
      <div className="container">

        <h1>{title}</h1>

        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>

      </div>
    </section>
  );
}