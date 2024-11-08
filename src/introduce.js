import React, { useState, useEffect } from "react";
import profileImage from "./assets/profilec.png";
const Introduce = () => {
  const text = "Channarong Chancher";
  const career = "Backend Developer";
  const textAbout = `i am 4th-year Electronics Engineering (Computer) student with a
              passion for backend development. I specialize in Golang and
              Node.js, and I'm constantly looking for ways to improve my skills
              and deepen my knowledge in these areas. I'm excited about building
              efficient and scalable backend systems .`;
  const [displayText, setDisplayText] = useState("");
  const [displayCareer, setDisplayCareer] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length + career.length) {
      const timer = setTimeout(() => {
        index < text.length
          ? setDisplayText((prev) => prev + text[index])
          : setDisplayCareer((prev) => prev + career[index - text.length]);
        setIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
    // if(index == text.length + career.length) ;
  }, [index]);
  const wrapWithSpan = (str, startIndex) => {
    return str.split("").map((char, i) => (
      <span
        key={i}
        className={`delay-${((startIndex + i) % 20) + 1}`}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <>
      <div className="intro" style={{ width: "100vh" }}>
        <div className="text-box">
          <div style={{ height: "8rem " }}>
            <span className="typing-text-mini" style={{ display: "flex" }}>
              {wrapWithSpan("I'm ")}
              <span className="typing-text-mini2" style={{ display: "flex" }}>
                {wrapWithSpan(displayText)}
              </span>
            </span>
            <span className="typing-text">{wrapWithSpan(displayCareer)}</span>
          </div>

          <div className="about-me">
            I am a 4th-year Electronics Engineering (Computer) student with a
            keen interest in backend development, particularly in Golang and
            Node.js. My focus is on building efficient and scalable backend
            systems. I have experience in web development, database management
            (MySQL, PostgreSQL), and API integration. I also value collaboration
            and problem-solving, always striving to improve through feedback and
            teamwork.
          </div>
        </div>
        <div className="floating-image">
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
      </div>
    </>
  );
};

export default Introduce;
