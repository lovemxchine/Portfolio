import "./App.css";
import Introduce from "./components/introduce";
import Content from "./components/content";
// import { NavLink } from "react-router-dom";

// import Navbar from "./components/navbar";

import React, { useRef, useEffect, useState } from "react";

function App() {
  // ใช้ useRef เพื่อสร้างการอ้างอิง (reference) ไปยัง section ต่าง ๆ
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ฟังก์ชันเลื่อนไปยังตำแหน่งที่กำหนด
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
      <div ref={homeRef} style={{ height: "100vh" }}>
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
