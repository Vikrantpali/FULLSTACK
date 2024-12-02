import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Stagger() {
  const boxContainer = useRef(null);
  const boxesRef = useRef([]);
  let arr =[1, 2, 3, 4, 5, 6];

  useEffect(() => {
    gsap.to(boxContainer.current.children, {
      x: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  useEffect(() => {
    gsap.to(boxesRef.current, {
      x: 100,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div
        ref={boxContainer}
        className="pt-[150px] w-[800px] overflow-hidden ml-[80px]"
      >
        <div className="w-[150px] h-[80px] -translate-x-[200%] bg-[black] text-white text-[52px] pl-[10px] flex  items-center ">
          This
        </div>
        <div className="w-[170px] h-[80px] -translate-x-[200%] bg-[black] text-white text-[52px] pl-[10px] flex  items-center ">
          Is A
        </div>
        <div className="w-[800px] h-[80px] -translate-x-[200%] bg-[black] text-white text-[52px] pl-[10px] flex  items-center ">
          Simple Stagger Animation
        </div>
      </div>
      <div className="flex gap-[10px]">
        {arr.map((_, index) => (
          <div key={index} className="w-[100px] h-[100px] bg-[lightblue] flex items-center justify-center" ref={(el) => (boxesRef.current[index] = el)}>
            Box {index + 1}
          </div>
        ))}
      </div>
    </>
  );
}

export default Stagger;
