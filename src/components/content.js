import React, { useState, useEffect, useRef } from "react";

const ScrollAnimation = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ${
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 translate-y-${delay}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Content = () => {
  return (
    <div className="intro">
      <ScrollAnimation delay="12">
        <div className="typing-text">
          <span className="delay-1">H</span>
          <span className="delay-2">i</span>
          <span className="delay-3"> </span>
          <span className="delay-4">m</span>
          <span className="delay-5">y</span>
          <span className="delay-6"> </span>
          <span className="delay-7">n</span>
          <span className="delay-8">a</span>
          <span className="delay-9">m</span>
          <span className="delay-10">e</span>
          <span className="delay-11"> </span>
          <span className="delay-12">i</span>
          <span className="delay-13">s</span>
          <span className="delay-14"> </span>
          <span className="delay-15">C</span>
          <span className="delay-16">h</span>
          <span className="delay-17">a</span>
          <span className="delay-18">n</span>
          <span className="delay-19">n</span>
          <span className="delay-20">a</span>
          <span className="delay-21">r</span>
          <span className="delay-22">o</span>
          <span className="delay-23">n</span>
          <span className="delay-24">g</span>
          <span className="delay-25"> </span>
          <span className="delay-26">C</span>
          <span className="delay-27">h</span>
          <span className="delay-28">a</span>
          <span className="delay-29">n</span>
          <span className="delay-30">c</span>
          <span className="delay-31">h</span>
          <span className="delay-32">e</span>
          <span className="delay-33">r</span>
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay="16" className="mt-4">
        <div className="typing-text">
          <span className="delay-1">I</span>
          <span className="delay-2">'</span>
          <span className="delay-3">m</span>
          <span className="delay-4"> </span>
          <span className="delay-5">E</span>
          <span className="delay-6">l</span>
          <span className="delay-7">e</span>
          <span className="delay-8">c</span>
          <span className="delay-9">t</span>
          <span className="delay-10">r</span>
          <span className="delay-11">o</span>
          <span className="delay-12">n</span>
          <span className="delay-13">i</span>
          <span className="delay-14">c</span>
          <span className="delay-15"> </span>
          <span className="delay-16">C</span>
          <span className="delay-17">o</span>
          <span className="delay-18">m</span>
          <span className="delay-19">p</span>
          <span className="delay-20">u</span>
          <span className="delay-21">t</span>
          <span className="delay-22">e</span>
          <span className="delay-23">r</span>
          <span className="delay-24"> </span>
          <span className="delay-25">E</span>
          <span className="delay-26">n</span>
          <span className="delay-27">g</span>
          <span className="delay-28">i</span>
          <span className="delay-29">n</span>
          <span className="delay-30">e</span>
          <span className="delay-31">e</span>
          <span className="delay-32">r</span>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Content;
