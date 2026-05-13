function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-hero">
          <div className="section-heading">
            <p className="section-label">Contact</p>
            <h2>Let us start a clear conversation about your next project.</h2>
          </div>

          <div className="contact-summary">
            <h3>Open for design, marketing, and frontend opportunities.</h3>
            <p>
              Share the role, project, or requirement. I will review the details
              and reply with a clear next step.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <aside className="contact-card contact-info-panel">
            <div className="contact-preview" aria-hidden="true">
              <div className="project-preview-window">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="contact-card-content">
              <p className="project-category">Available</p>
              <h3>Ready to collaborate</h3>
              <p>
                Best for UI/UX design, campaign creatives, landing pages, and
                frontend portfolio work.
              </p>

              <div className="project-outcome">
                <span>Response</span>
                <p>I usually reply within 24 hours.</p>
              </div>

              <div className="contact-direct-links">
                <a href="mailto:deepakchintu32@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/salagala-deepak-a259a424b"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          <form
            className="contact-card contact-form"
            action="mailto:deepakchintu32@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="contact-card-content">
              <p className="project-category">Send Message</p>
              <h3>Tell me about the opportunity</h3>

              <label className="form-field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Recruiter / Hiring Manager name"
                  required
                />
              </label>

              <label className="form-field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="hr@company.com"
                  required
                />
              </label>

              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+91 98765 43210" />
              </label>

              <label className="form-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the role or project. I'd love to hear from you."
                  required
                ></textarea>
              </label>

              <button className="contact-submit" type="submit">
                Send Message <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
