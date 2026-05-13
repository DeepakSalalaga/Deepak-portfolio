import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience"},
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function Navbar({ currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function navigate(event, href) {
    event.preventDefault();
    if (window.location.pathname !== href) {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("portfolio:navigate"));
    }
    closeMenu();
  }

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Primary navigation">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")}>
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
              aria-current={currentPath === item.href ? "page" : undefined}
              key={item.href}
              href={item.href}
              onClick={(event) => navigate(event, item.href)}
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
