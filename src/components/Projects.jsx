const projects = [
  {
    category: "Case Study",
    title: "Maa Partner: Owner App for MaaBooking",
    description:
      "A mobile app where property owners manage bookings, availability and offers. 12 screens, from sign-in to settings.",
    tags: ["Mobile App", "UI/UX", "Booking Management"],
    caseStudyUrl: "/projects/maabooking",
    image: "/projects/maabooking/cover.webp",
    accent: "#20d36b",
    tint: "#eafff1",
    panel: "#fff7cf",
  },
  {
    category: "Design",
    title: "HectoNow Platform",
    description: "Designed UI/UX and brand identity for a delivery platform.",
    tags: ["UI/UX", "Branding", "Figma", "Adobe XD", "Adobe Illustrator"],
    caseStudyUrl: "/projects/hecto",
    // image: "/projects/hecto.png", // add screenshot to public/projects/ then uncomment
    accent: "#7d2cff",
    tint: "#f3edff",
    panel: "#e9fbff",
  },
  {
    category: "Design System",
    title: "Brand & Marketing Design System",
    description:
      "Created visual assets for branding, social media, and marketing use.",
    tags: ["Visual Design", "Branding", "Marketing"],
    accent: "#ff4f8b",
    tint: "#fff0f6",
    panel: "#f5fff8",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work and case studies</h2>
          <p style={{ marginTop: 14, maxWidth: 640, fontSize: 17 }}>
            UI/UX, brand, and visual design projects, from research to final screens.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-image"
                style={{ background: `linear-gradient(135deg, ${project.tint}, ${project.panel})` }}
              >
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                ) : (
                  <div className="project-preview-window" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.caseStudyUrl && (
                  <a className="project-case-link" href={project.caseStudyUrl}>
                    View Case Study &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
