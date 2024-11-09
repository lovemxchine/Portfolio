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
        <div
          className="project-card"
          onClick={() => {
            window.open(
              "https://github.com/lovemxchine/Discount-Food_Project-Thesis"
            );
          }}
        >
          <div className="project-card-header">
            {/* <h2 style={{ color: "black" }}>Project 1</h2> */}
          </div>
          <div className="project-card-body">
            <h2
              style={{
                marginBottom: "1rem",
                color: "rgb(0, 213, 255)",
                fontSize: "1.5rem",
              }}
            >
              Discount Food Application
            </h2>
            <span>
              I am developing a cross-platform application for my thesis project
              in my fourth year. The project is designed for shops with leftover
              food, allowing them to broadcast and sell these items through the
              app
            </span>
            <p>Stack : Flutter ,React.js ,Node.js (Express) ,Firebase</p>
            <div className="project-card-click"> Go to my project</div>
          </div>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open("https://github.com/lovemxchine/Restaurant_SWE");
          }}
        >
          <div className="project-card-body">
            <h2
              style={{
                marginBottom: "1rem",
                color: "rgb(0, 213, 255)",
                fontSize: "1.5rem",
                // textShadow: "0px 10px 20px rgba(255,255,255,0.2) ",
              }}
            >
              Restaurant Application
            </h2>

            {/* <div className="between text"> */}
            <span>
              This project was for a Software Engineering class, I gained
              comprehensive experience in software development, from
              requirements gathering to implementation.
            </span>
            <p>Stack : Flutter , Firebase </p>
            <div className="project-card-click"> Go to my project</div>

            {/* </div> */}
          </div>
        </div>
        <div
          className="project-card"
          onClick={() => {
            // window.open("/");
          }}
        >
          <div className="project-card-header">
            {/* <h2 style={{ color: "black" }}>Project 3</h2> */}
          </div>
          <div className="project-card-body">
            <h2
              style={{
                marginBottom: "1rem",
                color: "rgb(0, 213, 255)",
                fontSize: "1.5rem",
              }}
            >
              Web Board
            </h2>
            <span>
              As part of a hands-on workshop in Web Application Development, I
              gained practical experience in full-stack web development.
            </span>
            <p>Stack : HTML, CSS, Bootstrap, JavaScript, PHP</p>
            <div className="project-card-click"> Go to my project</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
