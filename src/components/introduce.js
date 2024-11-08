import React, { useState, useEffect } from "react";

const Introduce = () => {
  const text = "Hi ! My12 name is Noey";
  const career = " I'm Web Developer";

  const [displayText, setDisplayText] = useState("");
  const [displayCareer, setDisplayCareer] = useState("");
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
    <div className="intro">
      <div className="typing-text" style={{ display: "flex " }}>
        {wrapWithSpan(displayText)}
      </div>
      <div className="typing-text" style={{ display: "flex " }}>
        {wrapWithSpan(displayCareer)}
      </div>
    </div>
  );
};

export default Introduce;
