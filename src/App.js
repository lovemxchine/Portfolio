import "./App.css";
import Introduce from "./introduce";
import Content from "./content";
// import { NavLink } from "react-router-dom";

// import Navbar from "./components/navbar";

import React, { useRef, useEffect, useState } from "react";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has occurred for this session

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the section is intersecting (in view)
        if (entry.isIntersecting && !hasAnimated.current) {
          // Trigger the animation if it's the first time or it has been reset
          setIsVisible(true);
          hasAnimated.current = true;
        } else if (!entry.isIntersecting) {
          // Reset the animation state when it goes out of view (optional, if you want to reset animation when scrolling out of view)
          hasAnimated.current = false;
          setIsVisible(false); // You can choose to reset the visibility or keep it
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <p1 className="nav-brand">CC</p1>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <p1 onClick={() => scrollToSection(homeRef)} className="nav-item">
            Home
          </p1>
          <p1 onClick={() => scrollToSection(skillsRef)} className="nav-item">
            Skills
          </p1>
          <p1 onClick={() => scrollToSection(projectRef)} className="nav-item">
            Projects
          </p1>
          <p1 onClick={() => scrollToSection(contactRef)} className="nav-item">
            Contact
          </p1>
        </div>
      </nav>

      {/* <Introduce /> */}
      <div ref={homeRef} style={{ height: "130vh" }}>
        <Introduce />
      </div>
      <div ref={skillsRef} style={{ height: "100vh" }}>
        <Content />
      </div>
      <div ref={projectRef} style={{ height: "100vh" }}>
        <h1>Contact Section</h1>
      </div>
      <div ref={contactRef} style={{ height: "100vh" }}>
        <h1>Contact Section</h1>
      </div>
    </div>
  );
}

export default App;
