import heroImage from "../assets/Deepak.png.png";

const resumeUrl = "/Deepak%20UIUX%20Designer%20Resume.pdf";

const proofPoints = [
  "Worked on MaaBooking platform",
  "Designed marketing creatives & UI",
  "Managed ad campaigns for engagement growth",
];

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">Creative digital studio energy</p>
          <h1>Salagala Deepak</h1>
          <p className="hero-role">UI/UX Designer • Branding</p>
          <p className="hero-copy">
            Designing clean and user-friendly digital experiences
          </p>
          <p className="hero-copy">
            I create intuitive interfaces that simplify user journeys and improve usability while supporting business goals.</p>
          <ul className="proof-list" aria-label="Professional proof points">
            {proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="primary-btn" href="/projects">
              View Projects
            </a>
            {/* <a className="secondary-btn" href={resumeUrl} target="_blank" rel="noreferrer">
              Preview Resume
            </a> */}
            <a className="secondary-btn" href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="profile-card">
          <img src={heroImage} alt="Deepak professional portrait" />
          <div className="profile-note">
            <span>Available for</span>
            <strong>UI/UX Design & Digital Marketing Roles</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
