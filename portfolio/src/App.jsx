import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/global.css";

const routes = {
  "/": <Hero />,
  "/about": <About />,
  "/experience": <Experience />,
  "/skills": <Skills />,
  "/projects": <Projects />,
  "/contact": <Contact />,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleRouteChange() {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("portfolio:navigate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("portfolio:navigate", handleRouteChange);
    };
  }, []);

  function handlePageClick(event) {
    const link = event.target.closest("a[href^='/']");

    if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    const href = link.getAttribute("href");

    if (!routes[href]) {
      return;
    }

    event.preventDefault();
    if (window.location.pathname !== href) {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("portfolio:navigate"));
    }
  }

  return (
    <div onClick={handlePageClick}>
      <Navbar currentPath={path} />
      <main>{routes[path] ?? routes["/"]}</main>
    </div>
  );
}

export default App;
