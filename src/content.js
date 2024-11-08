import React, { useEffect, useRef, useState } from "react";

const Content = () => {
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

  return (
    <div ref={sectionRef} className={`section ${isVisible ? "visible" : ""}`}>
      <h2>This section will animate on scroll</h2>
      <p>Scroll down to see the animation effect!</p>
    </div>
  );
};

export default Content;
