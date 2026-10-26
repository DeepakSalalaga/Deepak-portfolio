const services = [
  {
    icon: "UX",
    title: "UI/UX Design",
    description:
      "Clean interfaces, user flows, wireframes, and polished screens designed for clarity and conversion.",
  },
  {
    icon: "AD",
    title: "Digital Marketing",
    description:
      "Meta Ads, Google Ads, campaign creatives, and engagement-focused planning for growing brands.",
  },
  {
    icon: "FE",
    title: "Frontend Development",
    description:
      "Responsive React and CSS implementation that turns visual ideas into usable web experiences.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">What I Do</p>
          <h2>Practical creative support for teams that need design and growth.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
