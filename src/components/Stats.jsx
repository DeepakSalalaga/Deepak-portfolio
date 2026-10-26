const stats = [
  {
    value: "3+",
    label: "Projects Completed",
    detail: "Portfolio, platform UI, and marketing design work.",
  },
  {
    value: "UI + Ads",
    label: "Design & Marketing Experience",
    detail: "A combined view of user experience and campaign performance.",
  },
  {
    value: "Client Work",
    label: "Real Project Exposure",
    detail: "Built around practical goals, communication, and delivery.",
  },
];

function Stats() {
  return (
    <section className="stats-section" aria-label="Professional highlights">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <h3>{stat.label}</h3>
            <p>{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
