const base = "/projects/maabooking/";

const overview = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Product", value: "Maa Partner mobile app" },
  { label: "Users", value: "Property owners" },
  { label: "Screens", value: "12 designed screens" },
];

const decisions = [
  {
    title: "Status you can read at a glance",
    text: "Calendar colours and booking tags (Pending, Confirmed, Blocked, Offer) let owners see availability and booking state without opening anything.",
  },
  {
    title: "Actions where the data is",
    text: "Accept, Reject, Call and View details sit inside each booking card and notification, so common tasks take a single tap.",
  },
  {
    title: "Consistent colour meaning",
    text: "One purple for primary actions, green always means accept or confirm, red always means reject or delete. Owners learn the pattern once.",
  },
  {
    title: "Simple, persistent navigation",
    text: "A bottom bar (Home, Offers, Reports, Settings) and a property switcher at the top keep owners oriented across every screen.",
  },
];

const groups = [
  {
    title: "Access and onboarding",
    screens: [
      {
        file: "login",
        title: "Sign In",
        note: "Partners sign in with just a mobile number and a one-time code, so there is no password to remember. New owners can start sign-up from the same screen.",
      },
      {
        file: "otp",
        title: "OTP Verification",
        note: "A 6-digit code is sent to the owner's number. A live resend countdown and a Change Mobile Number link stop users from getting stuck.",
      },
      {
        file: "agreement",
        title: "Terms and Conditions",
        note: "Owners review the partner terms before they begin. The action button stays fixed at the bottom so it is always reachable while the terms scroll.",
      },
    ],
  },
  {
    title: "Managing availability",
    screens: [
      {
        file: "home-week",
        title: "Home: Week view, no bookings",
        note: "The home screen opens on a week strip with a Week / Month toggle. When a day is empty, a clear message appears with quick actions: Block Hours, Block date and Bulk Booking.",
      },
      {
        file: "home-month",
        title: "Home: Month view with bookings",
        note: "A colour-coded month calendar shows available, selected, booked and offer dates. The selected day's bookings appear below as cards with status, guest, booking ID and paid vs balance amounts.",
        tall: true,
      },
      {
        file: "date-blocked",
        title: "Blocked date",
        note: "Selecting a blocked date shows a clear Date Blocked state with one primary action to unblock it, keeping availability control simple.",
      },
      {
        file: "bulk-block",
        title: "Bulk date blocking",
        note: "Owners can block many dates at once by picking a date range and weekdays. A green helper line spells out exactly what will be blocked before they confirm.",
      },
    ],
  },
  {
    title: "Handling bookings",
    screens: [
      {
        file: "confirm",
        title: "Confirm Booking",
        note: "When a request arrives, a modal shows the key details and a 30-second countdown ring, with large Reject and Accept buttons so the decision is fast and hard to miss.",
      },
      {
        file: "details",
        title: "Booking details",
        note: "Everything about one booking in a single view: dates, total, received and pending amounts, guest information, plus Call Now and WhatsApp shortcuts.",
      },
      {
        file: "notifications",
        title: "Notifications",
        note: "Booking requests collect here with an All filter and highlighted new items. Owners can Accept or Reject right inside each card, or Mark all as read.",
      },
    ],
  },
  {
    title: "Running the business",
    screens: [
      {
        file: "offers",
        title: "Offers",
        note: "Owners create and manage deals such as Last Minute Deal, Special Price and Hike Price. Each card shows the discount, old vs new price, validity date and status, with edit and delete actions.",
        tall: true,
      },
      {
        file: "settings",
        title: "Settings",
        note: "One place to manage the property: details, photos, timings, pricing, amenities and bank details. Each block has its own edit button, with logout and app version at the end.",
        tall: true,
      },
    ],
  },
];

// Number the screens 01..12 across all groups without mutating anything during render
const numberedGroups = groups.map((group, groupIndex) => {
  const offset = groups.slice(0, groupIndex).reduce((total, g) => total + g.screens.length, 0);
  return {
    ...group,
    screens: group.screens.map((screen, i) => ({
      ...screen,
      number: String(offset + i + 1).padStart(2, "0"),
    })),
  };
});

function MaaBookingCaseStudy() {
  return (
    <article className="case-study-page">
      <header className="case-hero">
        <div className="container case-hero-grid">
          <div className="case-hero-content">
            <p className="section-label">Case Study</p>
            <h1>Maa Partner</h1>
            <p className="case-subtitle">
              A mobile app that lets property owners manage bookings, availability and offers for
              their farm houses on the MaaBooking platform.
            </p>
            <div className="case-tags">
              <span>Mobile App</span>
              <span>UI/UX Design</span>
              <span>Booking Management</span>
            </div>
          </div>
          <img
            className="mb-cover"
            src={`${base}cover.webp`}
            alt="Maa Partner app screens: home calendar, confirm booking and offers"
          />
        </div>

        <div className="container case-overview-grid">
          {overview.map((item) => (
            <div className="case-stat-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </header>

      <div className="case-content">
        <div className="container">
          <section className="case-section">
            <div className="case-text-block">
              <p className="section-label">About the app</p>
              <h2>Built for owners who manage everything from their phone</h2>
              <p>
                Maa Partner is the owner-side app of MaaBooking. Owners use it to accept or reject
                booking requests, keep their calendar up to date, run offers and maintain their
                property details. The interface focuses on fast decisions, clear status and as few
                taps as possible for everyday tasks.
              </p>
            </div>
          </section>

          <section className="case-section">
            <div className="case-section-heading">
              <p className="section-label">Design decisions</p>
              <h2>What shaped the interface</h2>
            </div>
            <div className="case-card-grid">
              {decisions.map((item, i) => (
                <div className="case-card" key={item.title}>
                  <p className="case-card-index">0{i + 1}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section" id="screens">
            <div className="case-section-heading">
              <p className="section-label">Screen walkthrough</p>
              <h2>The app, screen by screen</h2>
              <p>Twelve screens in the order an owner would meet them.</p>
            </div>

            {numberedGroups.map((group) => (
              <div className="mb-group" key={group.title}>
                <h3 className="mb-group-title">{group.title}</h3>
                {group.screens.map((screen) => (
                    <div className="screen-row" key={screen.file}>
                      <div className={`mb-phone ${screen.tall ? "is-tall" : ""}`}>
                        <img
                          src={`${base}${screen.file}.webp`}
                          alt={`${screen.title} screen of the Maa Partner app`}
                          loading="lazy"
                        />
                      </div>
                      <div className="mb-copy">
                        <span className="mb-number">{screen.number}</span>
                        <h3>{screen.title}</h3>
                        <p>{screen.note}</p>
                        {screen.tall && <small>Scroll inside the phone to see the full screen.</small>}
                      </div>
                    </div>
                ))}
              </div>
            ))}
          </section>

          <section className="case-final-cta">
            <p className="section-label">Next</p>
            <h2>Want to see more of my work?</h2>
            <p>I am open to UI/UX design roles. Let's talk.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="/contact">Contact Me</a>
              <a className="secondary-btn" href="/projects">Back to Projects</a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default MaaBookingCaseStudy;
