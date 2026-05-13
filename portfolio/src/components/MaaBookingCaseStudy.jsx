const heroTags = ["UI/UX", "Booking Flow", "Digital Marketing"];

const overviewCards = [
  { label: "Role", value: "UI/UX Designer & Digital Marketer" },
  { label: "Duration", value: "2024" },
  { label: "Tools", value: "Figma, Illustration, Adobe XD, Photoshop" },
  { label: "Focus", value: "User Experience & Conversion Flow" },
];

const painPoints = [
  "Visual hierarchy issue",
  "Unclear booking flow",
  "Information overload",
];

const goals = [
  "Simplify booking experience",
  "Improve visual clarity",
  "Create conversion-focused flow",
  "Build responsive experience",
];

const users = [
  {
    title: "Weekend travelers",
    needs: "Fast property discovery with clear price and availability information.",
    expectations: "Simple browsing, trustworthy visuals, and quick decision-making.",
    behavior: "Compare multiple options before choosing a short-stay destination.",
  },
  {
    title: "Friend groups",
    needs: "Easy filtering for group-friendly farmhouses, amenities, and space.",
    expectations: "Large images, clear capacity details, and simple sharing.",
    behavior: "Browse together and choose based on visuals, location, and value.",
  },
  {
    title: "Families planning outings",
    needs: "Reliable information about safety, facilities, and booking details.",
    expectations: "Clean content structure and confidence before inquiry or booking.",
    behavior: "Spend more time checking details before taking action.",
  },
];

const contributions = [
  "UI/UX Design",
  "Layout structuring",
  "Marketing creatives",
  /*"Frontend implementation",*/
  "Visual hierarchy planning",
];

const approach = [
  "User-first thinking",
  "Clear CTA placement",
  "Minimal layout strategy",
  "Mobile responsiveness",
];

const processSteps = [
  {
    title: "Research",
    text: "Studied common issues in booking platforms including cluttered interfaces and unclear navigation.",
  },
  {
    title: "Wireframing",
    text: "Structured layouts to prioritize property images, booking details, and user actions.",
  },
  {
    title: "UI Design",
    text: "Designed modern interfaces with balanced spacing, typography, and visual clarity.",
  },
  /*{
    title: "Frontend Development",
    text: "Built responsive layouts using React and CSS for consistency across devices.",
  },*/
];

const features = [
  "Clear property listing layout",
  "Easy navigation",
  "Structured booking flow",
  "Responsive UI",
  "Marketing-focused CTA sections",
];

const showcase = [
  "Homepage Design",
  "Listing Page",
  "Booking Flow",
  "Mobile Responsive Screens",
];

const outcomes = [
  "Better visual hierarchy",
  "Improved booking clarity",
  "Cleaner navigation",
  "More engaging UI",
];

const learnings = [
  "Conversion-focused design",
  "Responsive thinking",
  "Design consistency",
  "UX-driven layouts",
];

function MaaBookingCaseStudy() {
  return (
    <section className="case-study-page">
      <div className="case-hero">
        <div className="container case-hero-grid">
          <div className="case-hero-content">
            <p className="section-label">Case Study</p>
            <h1>MaaBooking Platform - UI/UX Case Study</h1>
            <p className="case-subtitle">
              Designing a simple and conversion-focused booking experience for farmhouses.
            </p>

            <div className="case-tags" aria-label="Project tags">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="case-mockup" aria-label="MaaBooking platform mockup">
            <div className="mockup-browser">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mockup-hero-card"></div>
            <div className="mockup-grid">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="container case-overview-grid">
          {overviewCards.map((card) => (
            <article className="case-stat-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="container case-content">
        <section className="case-section case-text-block">
          <p className="section-label">Project Overview</p>
          <h2>Project Overview</h2>
          <p>
            MaaBooking is a farmhouse booking platform designed to simplify property
            discovery and booking for users.
          </p>
          <p>
            The goal was to create a clean, easy-to-understand interface that improves
            user engagement and supports conversions.
          </p>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">Problem</p>
            <h2>The Problem</h2>
            <p>
              Users often face confusion while browsing and booking farmhouses due to
              cluttered layouts, unclear information, and poor navigation. This creates
              friction in the booking journey and reduces user confidence.
            </p>
          </div>

          <div className="case-card-grid">
            {painPoints.map((point) => (
              <article className="case-card" key={point}>
                <span className="case-card-index">Pain point</span>
                <h3>{point}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">Goals</p>
            <h2>Project Goals</h2>
          </div>

          <div className="case-card-grid case-card-grid-four">
            {goals.map((goal) => (
              <article className="case-card" key={goal}>
                <h3>{goal}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">Audience</p>
            <h2>Target Users</h2>
          </div>

          <div className="persona-grid">
            {users.map((user) => (
              <article className="persona-card" key={user.title}>
                <h3>{user.title}</h3>
                <p><strong>User needs:</strong> {user.needs}</p>
                <p><strong>Expectations:</strong> {user.expectations}</p>
                <p><strong>Booking behavior:</strong> {user.behavior}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-split">
          <div>
            <p className="section-label">My Role</p>
            <h2>My Contribution</h2>
          </div>
          <div className="case-list-card">
            {contributions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="case-section case-split">
          <div>
            <p className="section-label">Approach</p>
            <h2>Design Approach</h2>
            <p>
              I focused on creating a clean visual hierarchy and intuitive booking
              journey that guides users naturally from discovery to booking.
            </p>
            <p>
              The interface was designed to support both user experience and business
              conversion goals.
            </p>
          </div>

          <div className="case-list-card">
            {approach.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">Process</p>
            <h2>Design Process</h2>
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

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">Features</p>
            <h2>Key Features</h2>
          </div>

          <div className="case-card-grid case-card-grid-five">
            {features.map((feature) => (
              <article className="case-card" key={feature}>
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="case-section-heading">
            <p className="section-label">UI Showcase</p>
            <h2>UI Showcase</h2>
          </div>

          <div className="showcase-grid">
            {showcase.map((item) => (
              <article className="showcase-card" key={item}>
                <div className="showcase-mockup">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-outcome-section">
          <div className="case-section-heading">
            <p className="section-label">Outcome</p>
            <h2>Project Outcome</h2>
            <p>
              The redesigned interface improved booking clarity, strengthened visual
              hierarchy, and created a more engaging user experience.
            </p>
            <p>
              The project helped create a smoother booking journey with better usability
              and clearer content structure.
            </p>
          </div>

          <div className="case-card-grid case-card-grid-four">
            {outcomes.map((outcome) => (
              <article className="case-card" key={outcome}>
                <h3>{outcome}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-split">
          <div>
            <p className="section-label">Learnings</p>
            <h2>What I Learned</h2>
            <p>
              This project strengthened my understanding of how UI/UX design and
              marketing strategy work together to support both user experience and
              business goals.
            </p>
          </div>

          <div className="case-list-card">
            {learnings.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="case-final-cta">
          <p className="section-label">Next</p>
          <h2>Interested in more projects?</h2>
          <p>Let us connect and build meaningful digital experiences.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="/projects">View More Projects</a>
            <a className="secondary-btn" href="/contact">Contact Me</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MaaBookingCaseStudy;
