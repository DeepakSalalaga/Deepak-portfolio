import { useState } from "react";

const resumeUrl = "/Deepak%20UIUX%20Designer%20Resume.pdf";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new URLSearchParams(new FormData(form));
    data.set("form-name", "contact");
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
                <a href="tel:+916304457441">+91 6304457441</a>
                <a
                  href="https://www.linkedin.com/in/salagala-deepak"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                {/* <a href={resumeUrl} target="_blank" rel="noreferrer">
                  Preview Resume
                </a> */}
                <a href={resumeUrl} download>
                  Download Resume
                </a>
              </div>
            </div>
          </aside>

          <form
            className="contact-card contact-form"
            name="contact"
            method="post"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
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
                <input type="tel" name="phone" placeholder="+91 98xxx xxx 10" />
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

              <button className="contact-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}{" "}
                <span aria-hidden="true">-&gt;</span>
              </button>

              {status === "success" && (
                <p role="status">Thanks! Your message was sent. I will reply soon.</p>
              )}
              {status === "error" && (
                <p role="alert">
                  Something went wrong. Please email me directly at deepakchintu32@gmail.com.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
