const stats = [
  ["109", "Expert Workers"],
  ["485", "Happy Clients"],
  ["189", "Completed Projects"],
  ["20", "Running Projects"],
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">

        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}

      </div>
    </section>
  );
}