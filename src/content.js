import React, { useEffect, useRef, useState } from "react";
import reactImg from "./assets/react.png";
import nodeImg from "./assets/nodejss.png";
import golangImg from "./assets/Go-Logo_Blue.png";
import flutterImg from "./assets/flutter.png";
import cssImg from "./assets/css.png";
import htmlImg from "./assets/html.png";
import jsImg from "./assets/javascript.png";
import gitImg from "./assets/git.png";
import firebaseImg from "./assets/fireabase.png";
import sqlImg from "./assets/mysql.png";
import pgsqlImg from "./assets/postsql.png";
import javaImg from "./assets/javapng.png";

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
        threshold: 0.4,
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

  return (
    <div
      ref={sectionRef}
      className={`section ${isVisible ? "visible" : ""}`}
      style={{ paddingTop: "10rem" }}
    >
      <div className="topic">
        <h1>My Technical Skills</h1>
      </div>
      <div className="skill-group">
        <div className="skill-card">
          <img
            src={reactImg}
            alt="Avatar"
            width="110%"
            onClick={() => window.open("https://react.dev/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={nodeImg}
            alt="Avatar"
            width="70%"
            onClick={() => window.open("https://nodejs.org/en")}
          />
        </div>
        <div className="skill-card">
          <img
            src={golangImg}
            alt="Avatar"
            width="80%"
            onClick={() => window.open("https://go.dev/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={htmlImg}
            alt="Avatar"
            width="70%"
            onClick={() => window.open("https://www.w3schools.com/html/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={cssImg}
            alt="Avatar"
            width="120%"
            onClick={() => window.open("https://www.w3schools.com/css/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={jsImg}
            alt="Avatar"
            width="57%"
            onClick={() => window.open("https://www.w3schools.com/js/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={gitImg}
            alt="Avatar"
            width="70%"
            onClick={() => window.open("https://git-scm.com/")}
          />
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-card">
          <img
            src={flutterImg}
            alt="Avatar"
            width="50%"
            onClick={() => window.open("https://flutter.dev/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={firebaseImg}
            alt="Avatar"
            width="80%"
            onClick={() => window.open("https://firebase.google.com/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={sqlImg}
            alt="Avatar"
            width="70%"
            onClick={() => window.open("https://www.mysql.com/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={pgsqlImg}
            alt="Avatar"
            width="60%"
            onClick={() => window.open("https://www.postgresql.org/")}
          />
        </div>
        <div className="skill-card">
          <img
            src={javaImg}
            alt="Avatar"
            width="40%"
            onClick={() => window.open("https://www.java.com/en/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
