import React, { useRef } from "react";
import Hero from "../components/servicePages/hero";
import Section from "../components/servicePages/section";
import Refexample from "../components/servicePages/refexample";

function Service() {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hero />
      <div className="absolute top-[150px] right-[100px]">
        <button onClick={handleClick} className="">
          Scroll to Service Section
        </button>
      </div>
      <div ref={sectionRef}>
        <Section />
      </div>
      <Refexample/>
    </>
  );
}

export default Service;
