const heroTags = ["UI/UX", "Booking Flow", "React"];

const overviewCards = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Duration", value: "2024 - present" },
  { label: "Tools", value: "Figma, Adobe XD, Sketch" },
  { label: "Focus", value: "User Experience" },
];

const problems = [
  "Confusing booking flow",
  "Too many steps",
  "Poor visual hierarchy",
];

const goals = [
  "Simplify booking process",
  "Improve clarity",
  "Reduce user friction",
  "Improve navigation",
];

const processSteps = [
  {
    title: "Research",
    text: "Identified the key points where users need clearer property details, pricing, and booking actions.",
  },
  {
    title: "Wireframes",
    text: "Mapped low-fidelity layouts around browsing, listing comparison, and the booking flow.",
  },
  {
    title: "UI Design",
    text: "Created a clean interface system with stronger hierarchy, spacious sections, and visible CTAs.",
  },
  {
    title: "Testing",
    text: "Reviewed the flow for clarity, content order, and reduced friction across responsive screens.",
  },
];

const wireframes = [
  "Homepage structure",
  "Listing exploration",
  "Booking steps",
];

const uiScreens = [
  {
    title: "Home Screen",
    caption: "A clear entry point that helps users understand the platform and start exploring quickly.",
  },
  {
    title: "Listing Screen",
    caption: "Structured property cards make browsing, comparison, and decision-making easier.",
  },
  {
    title: "Booking Flow",
    caption: "A simplified step-by-step flow reduces uncertainty before users confirm their booking.",
  },
  {
    title: "Responsive Experience",
    caption: "Mobile-friendly layouts keep navigation, images, and CTAs easy to scan on smaller screens.",
  },
];

const solutions = [
  "Clean and intuitive UI",
  "Improved CTA visibility",
  "Structured layout system",
  "Better readability",
];

const outcomes = [
  "Improved user journey clarity",
  "Easier booking experience",
  "More structured flow",
];

function MaaBookingCaseStudy() {
  return (
    <main className="case-study-page">
      <section className="case-hero" aria-labelledby="maabooking-title">
        <div className="container case-hero-grid">
          <div className="case-hero-content">
            <p className="section-label">UI/UX Case Study</p>
            <h1 id="maabooking-title">MaaBooking Platform</h1>
            <p className="case-subtitle">
              Designing a seamless farmhouse booking experience with improved
              clarity and usability.
            </p>

            <div className="case-tags" aria-label="Project tags">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <figure className="case-mockup hero-image" aria-label="MaaBooking platform UI placeholder">
            <div className="mockup-browser" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mockup-hero-card"></div>
            <div className="mockup-grid" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </figure>
        </div>

        <div className="container case-overview-grid" aria-label="Project overview">
          {overviewCards.map((card) => (
            <article className="case-stat-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <div className="container case-content">
        <section className="case-section case-text-block" aria-labelledby="overview-heading">
          <p className="section-label">Overview</p>
          <h2 id="overview-heading">A focused booking experience for farmhouse stays</h2>
          <p>
            MaaBooking helps users discover and book farmhouses with less effort.
            The case study focuses on simplifying the experience from the first
            browse to the final booking action.
          </p>
        </section>

        <section className="case-section case-split" aria-labelledby="problem-heading">
          <div>
            <p className="section-label">Problem</p>
            <h2 id="problem-heading">Users needed a clearer path to booking</h2>
            <p>
              The existing experience made it harder for users to understand
              available properties, compare details, and move confidently through
              the booking journey.
            </p>
          </div>

          <div className="case-card-grid">
            {problems.map((problem) => (
              <article className="case-card" key={problem}>
                <span className="case-card-index">Issue</span>
                <h3>{problem}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="goal-heading">
          <div className="case-section-heading">
            <p className="section-label">Goal</p>
            <h2 id="goal-heading">Design goals</h2>
          </div>

          <div className="case-card-grid case-card-grid-four">
            {goals.map((goal) => (
              <article className="case-card" key={goal}>
                <h3>{goal}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="process-heading">
          <div className="case-section-heading">
            <p className="section-label">Process</p>
            <h2 id="process-heading">Research to refinement</h2>
          </div>

          <div className="case-timeline">
            {processSteps.map((step, index) => (
              <article className="case-timeline-item" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="wireframes-heading">
          <div className="case-section-heading">
            <p className="section-label">Wireframes</p>
            <h2 id="wireframes-heading">Low-fidelity layouts</h2>
            <p>Low-fidelity layouts focusing on structure and flow.</p>
          </div>

          <div className="showcase-grid">
            {wireframes.map((wireframe) => (
              <article className="showcase-card" key={wireframe}>
                <div className="showcase-mockup wireframe-image" aria-label={`${wireframe} placeholder`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>{wireframe}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="final-ui-heading">
          <div className="case-section-heading">
            <p className="section-label">Final UI</p>
            <h2 id="final-ui-heading">UI showcase</h2>
            <p>
              Large responsive screen placeholders show the final layout direction
              for the core booking experience.
            </p>
          </div>

          <div className="showcase-grid">
            {uiScreens.map((screen) => (
              <article className="showcase-card" key={screen.title}>
                <div className="showcase-mockup ui-showcase-image" aria-label={`${screen.title} UI placeholder`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>{screen.title}</h3>
                <p>{screen.caption}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-split" aria-labelledby="solution-heading">
          <div>
            <p className="section-label">Solution</p>
            <h2 id="solution-heading">A cleaner system for faster decisions</h2>
            <p>
              The redesign organizes content into clearer sections, gives booking
              actions more visibility, and supports users with a calmer visual flow.
            </p>
          </div>

          <div className="case-list-card">
            {solutions.map((solution) => (
              <span key={solution}>{solution}</span>
            ))}
          </div>
        </section>

        <section className="case-section case-outcome-section" aria-labelledby="outcome-heading">
          <div className="case-section-heading">
            <p className="section-label">Outcome</p>
            <h2 id="outcome-heading">A more confident booking journey</h2>
            <p>
              The final experience gives users a more structured way to browse,
              understand property details, and continue toward booking.
            </p>
          </div>

          <div className="case-card-grid">
            {outcomes.map((outcome) => (
              <article className="case-card" key={outcome}>
                <h3>{outcome}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-text-block" aria-labelledby="learnings-heading">
          <p className="section-label">Learnings</p>
          <h2 id="learnings-heading">What this project strengthened</h2>
          <p>
            This project helped me understand how small UX decisions, such as
            content order, CTA placement, and visual hierarchy, can make a booking
            experience feel more trustworthy and easier to complete.
          </p>
        </section>

        <section className="case-final-cta" aria-labelledby="cta-heading">
          <p className="section-label">Next</p>
          <h2 id="cta-heading">Explore more design work</h2>
          <p>View more projects or get in touch to discuss thoughtful digital experiences.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="/projects">View Projects</a>
            <a className="secondary-btn" href="/contact">Contact Me</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MaaBookingCaseStudy;
