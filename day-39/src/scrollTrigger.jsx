import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollEffect() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: boxRef1.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        // markers: true,
      },
      opacity: 1,
      x: 100,
    });
  }, []);
  useEffect(() => {
    gsap.to(boxRef2.current, {
      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
      scale: 1.5,
      rotation: 360,
      x: 100,
    });
  }, []);
  return (
    <div className="h-[200vh]">
      <div ref={boxRef1} className="w-[100px] opacity-0 h-[100px] bg-[red] mt-[100vh] ">
        Fade In and Move Up
      </div>
      <div ref={boxRef2} className="w-[100px] h-[100px] bg-[red] mt-[50vh] ">
        Scale and Rotate
      </div>
    </div>
  );
}

export default ScrollEffect;
