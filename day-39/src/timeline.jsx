import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Timeline() {
  const boxref = useRef(null);
  const boxref1 = useRef(null);
  const boxref2 = useRef(null);
  const boxref3 = useRef(null);
  const boxref4 = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(boxref.current, { duration: 1, rotation: 360 })
      .to(boxref.current, { duration: 1, x: 100 })
      .to(boxref.current, { duration: 1, opacity: 0.5 });
  }, []);

  useEffect(() => {
    gsap
      .timeline()
      .to(boxref1.current, { y: 20, duration: 0.1 })
      .to(boxref2.current, { y: 20, duration: 0.1 })
      .to(boxref3.current, { y: 20, duration: 0.1 })
      .to(boxref1.current, { y: 0, duration: 0.1 })
      .to(boxref2.current, { y: 0, duration: 0.1 })
      .to(boxref3.current, { y: 0, duration: 0.1 });
  }, []);

  useEffect(() => {
    gsap.fromTo(boxref4.current, { scale: 0.1 }, { scale: 1.2, duration: 0.5 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(boxref4.current, { scale: 1.2, duration: 0.5 });
  };
  const handleMouseLeave = () => {
    gsap.to(boxref4.current, { scale: 1, duration: 0.5 });
  };

  return (
    <section>
      <div ref={boxref} className="w-[100px] h-[100px] bg-black"></div>
      <div className="mt-[200px] h-[100px] flex justify-center gap-[12px]">
        <div
          ref={boxref1}
          className="w-[20px] rounded-[50%] bg-[lightblue] h-[20px] bg-black"
        ></div>
        <div
          ref={boxref2}
          className="w-[20px] rounded-[50%] bg-[lightblue] h-[20px] bg-black"
        ></div>
        <div
          ref={boxref3}
          className="w-[20px] rounded-[50%] bg-[lightblue] h-[20px] bg-black"
        ></div>
      </div>
      <div
        ref={boxref4}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[100px] h-[100px] bg-[coral] flex items-center justify-center cursor-pointer m-[10px] "
      >
        Hover Me!
      </div>
    </section>
  );
}

export default Timeline;
