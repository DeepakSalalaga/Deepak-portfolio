const skillGroups = [
   {
    title: "Design & Creative",
    description:
      "Skills focused on clean layouts, brand communication, and easy-to-understand visual systems.",
    skills: [
      {
        name: "UI/UX Design",
        level: "Interface Design",
        description: "User flows, visual hierarchy, wireframes, and responsive layouts.",
        icon: "UX",
        tone: "purple",
      },
      {
        name: "Figma",
        level: "Design Tool",
        description: "Screen design, components, spacing, and presentation-ready mockups.",
        icon: "F",
        tone: "pink",
      },
      {
        name: "Branding",
        level: "Visual Identity",
        description: "Social media creatives, brochures, color systems, and brand assets.",
        icon: "B",
        tone: "yellow",
      },
    ],
  },
  {
    title: "Marketing & Growth",
    description:
      "Tools used for campaign planning, paid ads, creative testing, and performance understanding.",
    skills: [
      {
        name: "Meta Ads",
        level: "Campaign Setup",
        description: "Created ad creatives, audience targeting, and campaign execution for engagement-focused campaigns.",
        icon: "M",
        tone: "blue",
      },
      {
        name: "Google Ads",
        level: "Search Marketing",
        description: "Keyword-based promotion, campaign structure, and conversion focus.",
        icon: "G",
        tone: "green",
      },
      {
        name: "Campaign Strategy",
        level: "Planning",
        description: "Clear messaging, content direction, and goal-based execution.",
        icon: "CS",
        tone: "yellow",
      },
    ],
  },
  /*
  {
    title: "Frontend Development",
    description:
      "Hands-on implementation skills for building portfolio pages and clean responsive interfaces.",
    skills: [
      {
        name: "React",
        level: "Component UI",
        description: "Reusable components, page structure, and interactive portfolio sections.",
        icon: "R",
        tone: "blue",
      },
      {
        name: "JavaScript",
        level: "Web Logic",
        description: "Interactive behavior, routing basics, and dynamic UI rendering.",
        icon: "JS",
        tone: "yellow",
      },
      {
        name: "HTML & CSS",
        level: "Responsive Build",
        description: "Semantic structure, layout, spacing, typography, and mobile design.",
        icon: "</>",
        tone: "green",
      },
    ],
  },
  */
];

const strengths = [
  "UI/UX Design",
  "Responsive Design & layouts",
  "Meta Ads Campaigns",
  "Google Ads",
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-hero">
          <div className="section-heading">
            <p className="section-label">Skills</p>
            <h2>Core Skills & Tools</h2>
          </div>

          <div className="skills-summary">
            <h3>A practical skill set focused on design, marketing, and frontend execution.</h3>
            <p>
              I combine creative thinking with hands-on tools to deliver clear and effective digital solutions.
            </p>
          </div>
        </div>

        <div className="skills-strengths" aria-label="Key strengths">
          {strengths.map((strength) => (
            <span key={strength}>{strength}</span>
          ))}
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <article className="skills-group-card" key={group.title}>
              <div className="skills-group-head">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className={`skill-icon skill-icon-${skill.tone}`} aria-hidden="true">
                      {skill.icon}
                    </div>

                    <div className="skill-info">
                      <div className="skill-title-row">
                        <h4>{skill.name}</h4>
                        <span>{skill.level}</span>
                      </div>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
