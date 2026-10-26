import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MaaBookingCaseStudy from "./components/MaaBookingCaseStudy";
import Hecto from "./components/Hecto";
import "./styles/global.css";

const sectionIds = ["top", "about", "experience", "skills", "projects", "contact"];

// Old page URLs still work: they open the landing page and scroll to that section.
const sectionPaths = {
  "/about": "about",
  "/experience": "experience",
  "/skills": "skills",
  "/projects": "projects",
  "/contact": "contact",
};

const caseStudies = {
  "/projects/maabooking": <MaaBookingCaseStudy />,
  "/projects/hecto": <Hecto />,
};

const titles = {
  "/": "Deepak Salagala | UI/UX Designer",
  "/projects/maabooking": "MaaBooking Case Study | Deepak Salagala",
  "/projects/hecto": "HectoNow Case Study | Deepak Salagala",
};

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [active, setActive] = useState("top");
  const view = caseStudies[path] ? path : "/";

  useEffect(() => {
    const onRoute = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onRoute);
    window.addEventListener("portfolio:navigate", onRoute);
    return () => {
      window.removeEventListener("popstate", onRoute);
      window.removeEventListener("portfolio:navigate", onRoute);
    };
  }, []);

  useEffect(() => {
    document.title = titles[view];
  }, [view]);

  // After a page change, jump to the requested section (or the top)
  useEffect(() => {
    const id = window.location.hash.slice(1) || sectionPaths[path];
    requestAnimationFrame(() => {
      const el = id && document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0 });
    });
  }, [path]);

  // Highlight the nav item for the section in view
  useEffect(() => {
    if (view !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [view]);

  // Fade-up reveal for cards and headings
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-heading, .about-content, .experience-intro, .experience-card, .skills-summary, .skills-strengths, .skills-group-card, .project-card, .contact-summary, .contact-card, .case-section, .screen-row, .case-stat-card, .case-final-cta"
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 4) * 90}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [view]);

  // Scroll progress bar + header shadow
  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--p", max > 0 ? window.scrollY / max : 0);
      document.body.classList.toggle("scrolled", window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goToSection(id) {
    if (view === "/") {
      if (window.location.pathname !== "/") window.history.replaceState(null, "", "/");
      window.history.replaceState(null, "", id === "top" ? "/" : `/#${id}`);
      const el = document.getElementById(id);
      if (id === "top" || !el) window.scrollTo({ top: 0, behavior: "smooth" });
      else el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.history.pushState({}, "", id === "top" ? "/" : `/#${id}`);
      window.dispatchEvent(new Event("portfolio:navigate"));
    }
  }

  function handlePageClick(event) {
    const link = event.target.closest("a[href]");
    if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      event.preventDefault();
      goToSection(href.slice(1) || "top");
    } else if (sectionPaths[href]) {
      event.preventDefault();
      goToSection(sectionPaths[href]);
    } else if (href === "/" || caseStudies[href]) {
      event.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, "", href);
        window.dispatchEvent(new Event("portfolio:navigate"));
      }
    }
  }

  return (
    <div onClick={handlePageClick}>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar active={view === "/" ? active : ""} />
      <main key={view} className="page-enter">
        {view === "/" ? <Home /> : caseStudies[view]}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Salagala Deepak. UI/UX Designer.</p>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
