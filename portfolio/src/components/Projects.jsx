const projects = [
  {
    category: "Case Study",
    title: "MaaBooking Platform",
    description:
      "Redesigned the booking experience to improve clarity, usability, and user flow.",
    tags: ["UI/UX", "Figma", "Branding", "Adobe XD", "Adobe Illustrator"],
    caseStudyUrl: "/projects/maabooking",
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

const styles = {
  section: {
    borderBlock: "2px solid #16131f",
    background:
      "radial-gradient(circle at 16px 16px, rgba(22, 19, 31, 0.09) 2px, transparent 2px) 0 0 / 34px 34px, #fffdfa",
  },
  header: {
    maxWidth: "840px",
    marginBottom: "48px",
  },
  heading: {
    maxWidth: "800px",
  },
  subtext: {
    maxWidth: "680px",
    marginTop: "14px",
    color: "#4f4a5d",
    fontSize: "17px",
    lineHeight: "1.7",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "28px",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0",
    overflow: "hidden",
    border: "2px solid #16131f",
    borderRadius: "24px",
    background: "#ffffff",
    boxShadow: "10px 10px 0 #16131f",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  },
  image: {
    flex: "1 1 320px",
    minHeight: "310px",
    display: "flex",
    alignItems: "center",
    padding: "30px",
    borderBottom: "0",
  },
  mockup: {
    width: "100%",
    display: "grid",
    gap: "14px",
    border: "2px solid #16131f",
    borderRadius: "18px",
    background: "#ffffff",
    padding: "20px",
    boxShadow: "8px 8px 0 rgba(22, 19, 31, 0.2)",
  },
  mockupTop: {
    width: "46%",
    height: "16px",
    border: "2px solid #16131f",
    borderRadius: "999px",
  },
  mockupHero: {
    width: "100%",
    height: "126px",
    border: "2px solid #16131f",
    borderRadius: "16px",
  },
  mockupLine: {
    width: "72%",
    height: "14px",
    border: "2px solid #16131f",
    borderRadius: "999px",
  },
  content: {
    flex: "1 1 360px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(28px, 5vw, 48px)",
  },
  category: {
    width: "fit-content",
    border: "2px solid #16131f",
    borderRadius: "999px",
    color: "#16131f",
    fontSize: "11px",
    fontWeight: "900",
    letterSpacing: "0.12em",
    marginBottom: "16px",
    padding: "8px 12px",
    textTransform: "uppercase",
  },
  title: {
    marginBottom: "12px",
  },
  description: {
    maxWidth: "560px",
    color: "#4f4a5d",
    fontSize: "16px",
    lineHeight: "1.7",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "22px",
  },
  tag: {
    border: "1px solid rgba(22, 19, 31, 0.18)",
    borderRadius: "999px",
    color: "#16131f",
    fontSize: "12px",
    fontWeight: "850",
    padding: "8px 10px",
  },
  link: {
    width: "fit-content",
    minHeight: "42px",
    display: "inline-flex",
    alignItems: "center",
    border: "2px solid #16131f",
    borderRadius: "999px",
    background: "#16131f",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "900",
    marginTop: "24px",
    padding: "0 16px",
    transition: "transform 180ms ease, filter 180ms ease",
  },
};

function Projects() {
  return (
    <section id="projects" className="section projects-section" style={styles.section}>
      <style>
        {`
          .funky-project-card:hover {
            transform: translateY(-8px) rotate(-0.6deg);
            box-shadow: 14px 14px 0 #16131f !important;
          }

          .funky-project-card:nth-child(even):hover {
            transform: translateY(-8px) rotate(0.6deg);
          }

          .funky-project-link:hover {
            transform: translateY(-2px);
            filter: saturate(1.2);
          }

          @media (max-width: 760px) {
            .funky-project-card {
              border-radius: 18px !important;
            }

            .funky-project-image {
              flex-basis: 100% !important;
              min-height: 240px !important;
              border-bottom: 2px solid #16131f !important;
            }

            .funky-project-content {
              flex-basis: 100% !important;
            }
          }
        `}
      </style>

      <div className="container">
        <div style={styles.header}>
          <p className="section-label">Projects</p>
          <h2 style={styles.heading}>
            Selected work with a little more personality
          </h2>
          <p style={styles.subtext}>
            UI/UX, brand, and visual design projects presented with bold mockups,
            playful accents, and clean storytelling.
          </p>
        </div>

        <div className="projects-grid" style={styles.list}>
          {projects.map((project) => (
            <article
              className="project-card funky-project-card"
              style={styles.card}
              key={project.title}
            >
              <div
                className="project-image funky-project-image"
                style={{
                  ...styles.image,
                  background:
                    `linear-gradient(135deg, ${project.tint}, ${project.panel}), ` +
                    "radial-gradient(circle at 22px 22px, rgba(22, 19, 31, 0.14) 2px, transparent 2px) 0 0 / 26px 26px",
                }}
                aria-hidden="true"
              >
                <div className="project-preview-window" style={styles.mockup}>
                  <span style={{ ...styles.mockupTop, background: project.accent }}></span>
                  <span style={{ ...styles.mockupHero, background: project.tint }}></span>
                  <span style={{ ...styles.mockupLine, background: project.panel }}></span>
                </div>
              </div>

              <div className="project-content funky-project-content" style={styles.content}>
                <p
                  className="project-category"
                  style={{ ...styles.category, background: project.tint }}
                >
                  {project.category}
                </p>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>

                <div className="project-tools" style={styles.tags}>
                  {project.tags.map((tag) => (
                    <span style={{ ...styles.tag, background: project.panel }} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  className="project-case-link funky-project-link"
                  href={project.caseStudyUrl || "#contact"}
                  style={{ ...styles.link, boxShadow: `5px 5px 0 ${project.accent}` }}
                >
                  View Case Study -&gt;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
