function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Top Heading */}
        <div className="section-heading">
          <p className="section-label">About</p>

          <h2 className="about-title">
            Designing useful digital experiences with a growth mindset.
          </h2>

          <h3 className="about-subtitle">
            UI/UX Designer, Digital Marketer, and Frontend Learner
          </h3>
        </div>

        {/* Content Below */}
        <div className="about-content">
          <p>
            I design clean, user-focused digital experiences that connect business goals with intuitive interfaces.
          </p>

          <p>
            I am focused on roles where I can contribute to product
            interfaces, landing pages, marketing creatives, and performance
            campaigns with a reliable, team-friendly approach.
          </p>

          <ul className="proof-list" aria-label="About highlights">
            <li>UI layouts built with clarity, hierarchy, and conversion in mind</li>
            <li>Hands-on exposure to Meta Ads, Google Ads, and campaign creatives</li>
            <li>Frontend implementation experience using React, Vite, and CSS</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;