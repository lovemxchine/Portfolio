import React, { useEffect, useRef, useState } from "react";

const Content = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        } else if (!entry.isIntersecting) {
          hasAnimated.current = false;
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section ${isVisible ? "visible" : ""}`}
      style={{ paddingTop: "10rem" }}
    >
      <div className="topic">
        <h1>My Experience </h1>
      </div>
      <div className="project-group">
        <div className="project-card">
          <div className="project-card-header">
            <h2 style={{ color: "black" }}>Project 1</h2>
          </div>
          <div className="project-card-body">
            <h2 style={{ marginBottom: "1rem" }}>Thesis</h2>
            <p>
              I am developing a cross-platform application for my thesis project
              in my fourth year. The project is designed for shops with leftover
              food, allowing them to broadcast and sell these items through the
              app
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h2 style={{ color: "black" }}>Project 2</h2>
          </div>
          <div className="project-card-body">
            <h2 style={{ marginBottom: "1rem" }}>Restaurant App</h2>

            <p>
              This project was for a Software Engineering class, I gained
              comprehensive experience in software development, from
              requirements gathering to implementation.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h2 style={{ color: "black" }}>Project 3</h2>
          </div>
          <div className="project-card-body">
            <h2 style={{ marginBottom: "1rem" }}>Web Board</h2>

            <p>
              As part of a hands-on workshop in Web Application Development, I
              gained practical experience in full-stack web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
