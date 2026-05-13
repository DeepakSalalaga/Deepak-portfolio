const experiences = [
  {
    role: "Digital Marketing & UI Designer",
    company: "MaaBooking Platform",
    period: "2024 - Present",
    location: "Current Stop",
    type: "Platform Experience",
    summary:
      "Worked across interface design, campaign creatives, and digital marketing execution to improve brand visibility and user engagement.",
    highlights: [
      "Designed clean UI screens and marketing creatives for platform communication",
      "Supported Meta Ads planning, creative testing, and campaign execution",
      "Improved user experience through clearer content structure and visuals",
    ],
    focus: ["UI/UX", "Meta Ads", "Creative Design"],
  },
  {
    role: "Freelance Designer & Marketer",
    company: "Self Projects",
    period: "2023 - 2024",
    location: "Creative Route",
    type: "Independent Projects",
    summary:
      "Built practical experience through personal and client-focused work covering UI design, branding materials, and frontend implementation.",
    highlights: [
      "Created social media creatives, brochure layouts, and branding assets",
      "Built responsive frontend interfaces using HTML, CSS, JavaScript, and React",
      "Strengthened hands-on understanding of user journeys and campaign strategy",
    ],
    focus: ["Branding", "Frontend", "Campaigns"],
  },
];

const journeyStats = [
  {
    value: "2+",
    label: "Career Stops",
    detail: "Experience across platform work, freelance projects, and self-led practice.",
  },
  {
    value: "3",
    label: "Core Routes",
    detail: "UI/UX design, digital marketing, and frontend implementation.",
  },
  {
    value: "2023",
    label: "Journey Started",
    detail: "Hands-on learning through practical digital projects and campaign work.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="experience-hero">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Practical experience across design, marketing, and frontend execution.</h2>
          </div>

          <div className="experience-intro">
            <h3>Work shaped by clarity, business goals, and clean digital delivery.</h3>
            <p>
              I have worked on product interfaces, campaign creatives, brand
              communication, and responsive frontend pages. Each experience
              helped me connect visual design with user needs and measurable
              marketing outcomes.
            </p>
          </div>
        </div>

        <div className="experience-stats">
          {journeyStats.map((stat) => (
            <article className="experience-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="experience-timeline" aria-label="Professional experience timeline">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.role}>
              <div className="experience-marker" aria-hidden="true">
                <span></span>
              </div>

              <div className="experience-card-main">
                <div className="experience-card-top">
                  <div>
                    <p className="experience-type">{experience.type}</p>
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>

                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p>{experience.summary}</p>

                <ul className="experience-list" aria-label={`${experience.role} highlights`}>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-tags" aria-label={`${experience.role} focus areas`}>
                  {experience.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
