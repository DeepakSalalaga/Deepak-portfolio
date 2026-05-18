const heroTags = ["UI/UX", "Branding", "Delivery Platform"];

const overview = [
  { label: "Role", value: "UI/UX Designer & Branding" },
  { label: "Duration", value: "2024" },
  { label: "Tools", value: "Figma, Illustrator" },
  { label: "Focus", value: "User Experience & Visual Identity" },
];

const problems = [
  "No clear visual identity",
  "Unstructured UI layout",
  "Confusing navigation flow",
];

const goals = [
  "Build a clean and modern interface",
  "Create a strong brand identity",
  "Improve usability and navigation",
  "Ensure consistent design system",
];

const process = ["Research", "User Flow", "Wireframes", "UI Design", "Branding"];

const wireframes = ["Home structure", "Product browsing", "Order details"];

const brandAssets = [
  {
    title: "Logo Design",
    text: "Simple mark direction built for fast recognition across app and marketing touchpoints.",
  },
  {
    title: "Color Palette",
    text: "A focused blue-led palette creates clarity, trust, and consistency throughout the product.",
  },
  {
    title: "Typography",
    text: "Clean type choices support scanning, product discovery, and readable ordering flows.",
  },
];

const uiScreens = [
  {
    title: "Home Screen",
    caption: "A clean landing experience that quickly communicates the delivery platform value.",
  },
  {
    title: "Product Listing",
    caption: "Structured cards help users browse products and compare choices with less effort.",
  },
  {
    title: "Order Flow",
    caption: "A simplified ordering journey improves clarity from selection to confirmation.",
  },
];

const solutions = [
  "Designed clean and structured UI layouts",
  "Created consistent visual design system",
  "Improved navigation and readability",
  "Integrated branding into UI",
];

const outcomes = [
  "Improved visual consistency",
  "Better usability and clarity",
  "Strong brand identity across platform",
];

function Hecto() {
  return (
    <main className="hecto-case">
      <style>
        {`
          .hecto-case {
            --hecto-ink: #0f172a;
            --hecto-muted: #647084;
            --hecto-line: #e6eaf2;
            --hecto-soft: #f7f9fd;
            --hecto-blue: #3b5bff;
            --hecto-blue-dark: #233bd4;
            --hecto-blue-soft: #edf2ff;
            --hecto-lavender: #f5f1ff;
            background:
              radial-gradient(circle at 8% 0%, rgba(59, 91, 255, 0.09), transparent 28%),
              linear-gradient(90deg, rgba(15, 23, 42, 0.035) 1px, transparent 1px) 0 0 / 44px 44px,
              linear-gradient(0deg, rgba(15, 23, 42, 0.025) 1px, transparent 1px) 0 0 / 44px 44px,
              #ffffff;
            color: var(--hecto-ink);
          }

          .hecto-case .container {
            width: min(100% - 40px, 1120px);
            margin: 0 auto;
          }

          .hecto-hero {
            position: relative;
            overflow: hidden;
            padding: 96px 0 58px;
            border-bottom: 1px solid var(--hecto-line);
            background:
              radial-gradient(circle at 82% 16%, rgba(59, 91, 255, 0.16), transparent 28%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 255, 0.92) 100%);
          }

          .hecto-hero::after {
            content: "";
            position: absolute;
            inset: auto 8% -120px auto;
            width: 360px;
            height: 360px;
            border: 1px solid rgba(59, 91, 255, 0.12);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.38);
            pointer-events: none;
          }

          .hecto-hero > .container {
            position: relative;
            z-index: 1;
          }

          .hecto-hero-grid,
          .hecto-split {
            display: grid;
            grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
            gap: clamp(36px, 7vw, 82px);
            align-items: center;
          }

          .hecto-label {
            width: fit-content;
            border: 1px solid rgba(59, 91, 255, 0.18);
            border-radius: 999px;
            background: rgba(237, 242, 255, 0.82);
            color: var(--hecto-blue-dark);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.14em;
            margin-bottom: 14px;
            padding: 8px 11px;
            text-transform: uppercase;
          }

          .hecto-case h1 {
            font-size: clamp(44px, 6vw, 76px);
            line-height: 1.03;
            letter-spacing: -0.055em;
            margin-bottom: 18px;
          }

          .hecto-case h2 {
            font-size: clamp(30px, 4vw, 48px);
            line-height: 1.08;
            letter-spacing: -0.045em;
            margin-bottom: 14px;
          }

          .hecto-case h3 {
            font-size: 18px;
            line-height: 1.3;
            margin-bottom: 8px;
          }

          .hecto-case p {
            color: var(--hecto-muted);
            line-height: 1.75;
          }

          .hecto-subtitle {
            max-width: 620px;
            font-size: clamp(18px, 2vw, 22px);
          }

          .hecto-tags,
          .hecto-pill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 26px;
          }

          .hecto-tags span,
          .hecto-pill-list span {
            border: 1px solid var(--hecto-line);
            border-radius: 999px;
            background: #ffffff;
            color: var(--hecto-ink);
            font-size: 12px;
            font-weight: 750;
            padding: 9px 12px;
          }

          .hecto-tags span:first-child {
            border-color: rgba(59, 91, 255, 0.24);
            background: var(--hecto-blue);
            color: #ffffff;
          }

          .hecto-mockup {
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 34px;
            background:
              linear-gradient(135deg, rgba(59, 91, 255, 0.14), rgba(245, 241, 255, 0.72)),
              #f7f9fd;
            padding: 26px;
            box-shadow:
              0 34px 90px rgba(30, 41, 59, 0.14),
              inset 0 1px 0 rgba(255, 255, 255, 0.75);
            transform: rotate(1.2deg);
          }

          .hecto-screen {
            display: grid;
            gap: 16px;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 26px;
            background: #ffffff;
            padding: 22px;
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
          }

          .hecto-screen span {
            display: block;
            border-radius: 999px;
            background: #dfe6f6;
          }

          .hecto-screen span:nth-child(1) {
            width: 46%;
            height: 18px;
            background: var(--hecto-blue);
          }

          .hecto-screen span:nth-child(2) {
            height: 172px;
            border-radius: 22px;
            background:
              linear-gradient(135deg, rgba(59, 91, 255, 0.18), rgba(255, 255, 255, 0.8)),
              repeating-linear-gradient(90deg, transparent 0 38px, rgba(59, 91, 255, 0.06) 38px 39px),
              var(--hecto-blue-soft);
          }

          .hecto-screen span:nth-child(3) {
            width: 72%;
            height: 16px;
          }

          .hecto-screen span:nth-child(4) {
            width: 54%;
            height: 16px;
          }

          .hecto-overview {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
            margin-top: 44px;
          }

          .hecto-stat,
          .hecto-card,
          .hecto-visual,
          .hecto-outcome,
          .hecto-cta {
            border: 1px solid var(--hecto-line);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.86);
            box-shadow:
              0 18px 60px rgba(15, 23, 42, 0.055),
              inset 0 1px 0 rgba(255, 255, 255, 0.88);
          }

          .hecto-stat,
          .hecto-card {
            padding: 24px;
            transition:
              border-color 180ms ease,
              box-shadow 180ms ease,
              transform 180ms ease;
          }

          .hecto-card:hover,
          .hecto-visual:hover {
            border-color: rgba(59, 91, 255, 0.24);
            box-shadow: 0 24px 70px rgba(59, 91, 255, 0.12);
            transform: translateY(-4px);
          }

          .hecto-stat span,
          .hecto-card span {
            display: block;
            color: var(--hecto-blue);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
            margin-bottom: 8px;
            text-transform: uppercase;
          }

          .hecto-stat strong {
            display: block;
            font-size: 16px;
            line-height: 1.45;
          }

          .hecto-content {
            display: grid;
            gap: 96px;
            padding: 96px 0;
          }

          .hecto-section-heading {
            max-width: 760px;
            margin-bottom: 28px;
          }

          .hecto-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .hecto-grid-four {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .hecto-showcase-grid {
            display: grid;
            gap: 24px;
          }

          .hecto-showcase-grid .hecto-visual:first-child .hecto-placeholder {
            min-height: 430px;
          }

          .hecto-showcase-grid .hecto-visual:not(:first-child) {
            display: grid;
            grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1fr);
            align-items: center;
          }

          .hecto-showcase-grid .hecto-visual:not(:first-child) .hecto-placeholder {
            min-height: 260px;
          }

          .hecto-timeline {
            position: relative;
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
          }

          .hecto-timeline::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 6%;
            right: 6%;
            height: 1px;
            background: var(--hecto-line);
            z-index: 0;
          }

          .hecto-step {
            position: relative;
            z-index: 1;
            border: 1px solid var(--hecto-line);
            border-radius: 999px;
            background: #ffffff;
            color: var(--hecto-ink);
            font-size: 13px;
            font-weight: 800;
            padding: 14px 16px;
            text-align: center;
            box-shadow: 0 12px 34px rgba(15, 23, 42, 0.06);
          }

          .hecto-step:nth-child(3) {
            border-color: rgba(59, 91, 255, 0.24);
            background: var(--hecto-blue);
            color: #ffffff;
          }

          .hecto-visual {
            overflow: hidden;
            transition:
              border-color 180ms ease,
              box-shadow 180ms ease,
              transform 180ms ease;
          }

          .hecto-placeholder {
            min-height: 340px;
            display: grid;
            align-content: end;
            gap: 16px;
            background:
              radial-gradient(circle at 18% 18%, rgba(59, 91, 255, 0.16), transparent 26%),
              linear-gradient(135deg, var(--hecto-blue-soft), #fbfcff);
            padding: 30px;
          }

          .hecto-placeholder span {
            display: block;
            border-radius: 14px;
            background: #ffffff;
            box-shadow:
              inset 0 0 0 1px rgba(15, 23, 42, 0.08),
              0 12px 28px rgba(15, 23, 42, 0.05);
          }

          .hecto-placeholder span:nth-child(1) {
            width: 44%;
            height: 18px;
            border-radius: 999px;
            background: var(--hecto-blue);
          }

          .hecto-placeholder span:nth-child(2) {
            width: 100%;
            height: 128px;
          }

          .hecto-placeholder span:nth-child(3) {
            width: 68%;
            height: 16px;
            border-radius: 999px;
          }

          .hecto-visual h3,
          .hecto-visual p {
            padding-inline: 22px;
          }

          .hecto-visual h3 {
            padding-top: 22px;
          }

          .hecto-visual p {
            padding-bottom: 22px;
          }

          .hecto-brand-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }

          .hecto-brand-swatch {
            height: 138px;
            border: 1px solid var(--hecto-line);
            border-radius: 18px;
            background: var(--hecto-blue-soft);
            margin-bottom: 18px;
          }

          .hecto-brand-grid article:nth-child(1) .hecto-brand-swatch {
            background: #111827;
          }

          .hecto-brand-grid article:nth-child(2) .hecto-brand-swatch {
            background: linear-gradient(135deg, #315cff, #8aa2ff);
          }

          .hecto-brand-grid article:nth-child(3) .hecto-brand-swatch {
            background:
              linear-gradient(90deg, #111827 0 46%, #6b7280 46% 72%, #d1d5db 72%);
          }

          .hecto-outcome {
            background:
              radial-gradient(circle at 100% 0%, rgba(59, 91, 255, 0.12), transparent 32%),
              var(--hecto-soft);
            padding: clamp(28px, 5vw, 46px);
          }

          .hecto-cta {
            display: grid;
            justify-items: center;
            padding: clamp(34px, 6vw, 60px);
            text-align: center;
            background:
              linear-gradient(135deg, #ffffff, var(--hecto-blue-soft));
          }

          .hecto-actions {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-top: 24px;
          }

          .hecto-btn {
            min-height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--hecto-line);
            border-radius: 999px;
            color: var(--hecto-ink);
            font-size: 14px;
            font-weight: 800;
            padding: 0 18px;
            transition:
              border-color 180ms ease,
              background 180ms ease,
              box-shadow 180ms ease,
              transform 180ms ease;
          }

          .hecto-btn.primary {
            border-color: var(--hecto-blue);
            background: var(--hecto-blue);
            color: #ffffff;
            box-shadow: 0 12px 28px rgba(59, 91, 255, 0.22);
          }

          .hecto-btn:hover {
            border-color: rgba(59, 91, 255, 0.36);
            transform: translateY(-2px);
          }

          @media (max-width: 900px) {
            .hecto-hero-grid,
            .hecto-split,
            .hecto-overview,
            .hecto-grid,
            .hecto-grid-four,
            .hecto-showcase-grid .hecto-visual:not(:first-child),
            .hecto-timeline,
            .hecto-brand-grid {
              grid-template-columns: 1fr;
            }

            .hecto-content {
              gap: 62px;
              padding: 66px 0;
            }

            .hecto-mockup {
              transform: none;
            }
          }

          @media (max-width: 640px) {
            .hecto-case .container {
              width: min(100% - 28px, 1120px);
            }

            .hecto-hero {
              padding-top: 58px;
            }

            .hecto-placeholder {
              min-height: 220px;
            }

            .hecto-actions,
            .hecto-btn {
              width: 100%;
            }
          }
        `}
      </style>

      <section className="hecto-hero" aria-labelledby="hecto-title">
        <div className="container hecto-hero-grid">
          <div>
            <p className="hecto-label">UI/UX + Branding Case Study</p>
            <h1 id="hecto-title">HectoNow Platform</h1>
            <p className="hecto-subtitle">
              Designing a delivery platform with a clean user experience and
              strong brand identity.
            </p>
            <div className="hecto-tags" aria-label="Project tags">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <figure className="hecto-mockup hero-image" aria-label="HectoNow platform mockup placeholder">
            <div className="hecto-screen">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </figure>
        </div>

        <div className="container hecto-overview" aria-label="Project overview">
          {overview.map((item) => (
            <article className="hecto-stat" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <div className="container hecto-content">
        <section className="hecto-split" aria-labelledby="hecto-problem">
          <div>
            <p className="hecto-label">Problem</p>
            <h2 id="hecto-problem">The experience needed structure and identity</h2>
            <p>
              The platform lacked a structured UI and strong brand identity,
              leading to inconsistent user experience and unclear navigation.
            </p>
          </div>

          <div className="hecto-grid">
            {problems.map((problem) => (
              <article className="hecto-card" key={problem}>
                <span>Issue</span>
                <h3>{problem}</h3>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="hecto-goals">
          <div className="hecto-section-heading">
            <p className="hecto-label">Goal</p>
            <h2 id="hecto-goals">Design goals</h2>
          </div>
          <div className="hecto-grid hecto-grid-four">
            {goals.map((goal) => (
              <article className="hecto-card" key={goal}>
                <h3>{goal}</h3>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="hecto-process">
          <div className="hecto-section-heading">
            <p className="hecto-label">Process</p>
            <h2 id="hecto-process">From research to brand system</h2>
          </div>
          <div className="hecto-timeline" aria-label="Design process">
            {process.map((step) => (
              <span className="hecto-step" key={step}>
                {step}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="hecto-flow">
          <div className="hecto-section-heading">
            <p className="hecto-label">User Flow</p>
            <h2 id="hecto-flow">Ordering journey</h2>
            <p>Defined user journey for browsing, selecting, and ordering products.</p>
          </div>
          <article className="hecto-visual">
            <div className="hecto-placeholder flow-image" aria-label="User flow placeholder">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        </section>

        <section aria-labelledby="hecto-wireframes">
          <div className="hecto-section-heading">
            <p className="hecto-label">Wireframes</p>
            <h2 id="hecto-wireframes">Low-fidelity structure</h2>
            <p>Focused on structure and layout clarity before visual design.</p>
          </div>
          <div className="hecto-grid">
            {wireframes.map((screen) => (
              <article className="hecto-visual" key={screen}>
                <div className="hecto-placeholder wireframe-image" aria-label={`${screen} wireframe placeholder`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h3>{screen}</h3>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="hecto-branding">
          <div className="hecto-section-heading">
            <p className="hecto-label">Branding</p>
            <h2 id="hecto-branding">Visual identity system</h2>
            <p>
              Created a clean and modern visual identity to support product
              usability and recognition.
            </p>
          </div>
          <div className="hecto-brand-grid">
            {brandAssets.map((asset) => (
              <article className="hecto-card" key={asset.title}>
                <div className="hecto-brand-swatch"></div>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="hecto-ui">
          <div className="hecto-section-heading">
            <p className="hecto-label">Final UI</p>
            <h2 id="hecto-ui">Platform screens</h2>
          </div>
          <div className="hecto-showcase-grid">
            {uiScreens.map((screen) => (
              <article className="hecto-visual" key={screen.title}>
                <div className="hecto-placeholder ui-showcase-image" aria-label={`${screen.title} UI placeholder`}>
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

        <section className="hecto-split" aria-labelledby="hecto-solution">
          <div>
            <p className="hecto-label">Solution</p>
            <h2 id="hecto-solution">A unified product and brand experience</h2>
            <p>
              The final direction brings layout, navigation, typography, and
              branding into one consistent system.
            </p>
          </div>
          <div className="hecto-pill-list">
            {solutions.map((solution) => (
              <span key={solution}>{solution}</span>
            ))}
          </div>
        </section>

        <section className="hecto-outcome" aria-labelledby="hecto-outcome">
          <div className="hecto-section-heading">
            <p className="hecto-label">Outcome</p>
            <h2 id="hecto-outcome">A clearer and more recognizable platform</h2>
          </div>
          <div className="hecto-grid">
            {outcomes.map((outcome) => (
              <article className="hecto-card" key={outcome}>
                <h3>{outcome}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="hecto-section-heading" aria-labelledby="hecto-learnings">
          <p className="hecto-label">Learnings</p>
          <h2 id="hecto-learnings">Branding and UX work best together</h2>
          <p>
            This project helped me understand the importance of combining
            branding with UI/UX design to create a consistent and user-friendly
            product experience.
          </p>
        </section>

        <section className="hecto-cta" aria-labelledby="hecto-cta">
          <p className="hecto-label">Next</p>
          <h2 id="hecto-cta">Explore more work</h2>
          <p>See more projects or contact me for UI/UX and branding work.</p>
          <div className="hecto-actions">
            <a className="hecto-btn primary" href="/projects">
              View Projects
            </a>
            <a className="hecto-btn" href="/contact">
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Hecto;
