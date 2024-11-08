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
            <h2>Project 1</h2>
          </div>
          <div className="project-card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia, nunc et tincidunt lacinia, nunc et tincidunt
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h2>Project 2</h2>
          </div>
          <div className="project-card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia, nunc et tincidunt lacinia, nunc et tincidunt
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h2>Project 3</h2>
          </div>
          <div className="project-card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia, nunc et tincidunt lacinia, nunc et tincidunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
