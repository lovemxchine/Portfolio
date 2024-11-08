import React, { useEffect, useRef, useState } from "react";
import githubIcon from "./assets/github.png";
import emailIcon from "./assets/60543.png";
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
        <h1>FEEL FREE TO CONTACT ME</h1>
      </div>
      <div>
        <a href="https://github.com/lovemxchine" className="contact">
          <span>
            <img src={githubIcon} className="icon"></img>
          </span>
          <span className="contact-text">github.com/lovemxchine</span>
        </a>
        <a className="contact">
          <span>
            <img src={emailIcon} className="icon"></img>
          </span>
          <span className="contact-text">noey.chancher@gmail.com</span>
        </a>
      </div>

      <h2></h2>
      <h2></h2>
    </div>
  );
};

export default Content;
