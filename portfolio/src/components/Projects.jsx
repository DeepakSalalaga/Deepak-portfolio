const projects = [
  {
    category: "Case Study",
    title: "Hecto - UI/UX Case Study",
    subtitle: "Product experience and interface storytelling",
    description:
      "Built a clear product case study around user needs, visual hierarchy, responsive layout decisions, and polished presentation.",
    outcome:
      "Presented the project as a professional UX story with stronger structure, cleaner screens, and easier-to-follow design decisions.",
    deliverables: ["UX research", "User flow", "Interface screens"],
    tools: ["Figma", "UI/UX", "Visual Design"],
    theme: "case-study",
  },
  {
    category: "Case Study",
    title: "MaaBooking - UI/UX Case Study",
    subtitle: "Product interface and booking journey",
    description:
      "Designed a streamlined booking experience with clear service structure, trust-building content, and a conversion-focused user flow.",
    outcome:
      "Improved visual hierarchy, making the booking journey clearer and easier for users to complete.",
    deliverables: ["Booking flow", "Responsive screens", "Landing sections"],
    tools: ["Figma", "UI/UX", "React"],
    theme: "case-study",
    caseStudyUrl: "/projects/maabooking",
  },
  {
    category: "Graphic Design",
    title: "Brand & Marketing Design System",
    subtitle: "Visual communication for digital and print",
    description:
      "Clean creative layouts designed for brand presentation, social media communication, brochure content, and promotional use.",
    outcome:
      "Created professional assets with stronger readability, spacing, and brand consistency.",
    deliverables: ["Social creatives", "Brochure layouts", "Brand assets"],
    tools: ["Figma", "Canva", "Layout Design"],
    theme: "graphic-design",
  },
  {
    category: "Digital Marketing",
    title: "Digital Marketing Campaign Execution",
    subtitle: "Marketing execution with performance intent",
    description:
      "Campaign-focused work covering ad creative direction, content planning, audience thinking, and platform-ready marketing assets.",
    outcome:
      "Created clearer messaging and performance-focused creatives to improve user engagement.",
    deliverables: ["Meta Ads creatives", "Campaign content", "Performance-focused copy"],
    tools: ["Meta Ads", "Google Ads", "Creative Testing"],
    theme: "digital-marketing",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-hero">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Case studies and creative work with practical outcomes.</h2>
          </div>

          <div className="projects-summary">
            <h3>Featured work across UX design, graphic design, and digital marketing.</h3>
            <p>
              Hecto and MaaBooking highlight my case-study process, while the
              creative and marketing projects show hands-on execution.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className={`project-image project-image-${project.theme}`}
                aria-hidden="true"
              >
                <div className="project-preview-window">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>

                <div className="project-outcome">
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </div>

                <div className="project-deliverables">
                  {project.deliverables.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                {project.caseStudyUrl ? (
                  <a className="project-case-link" href={project.caseStudyUrl}>
                    View Case Study
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
