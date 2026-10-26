import { useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Navbar({ active }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">D</span>
          <span>Deepak</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              aria-current={active === item.id ? "page" : undefined}
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
