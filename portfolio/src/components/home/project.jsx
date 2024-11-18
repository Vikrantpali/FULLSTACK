import React from "react";
import Project1 from "../../Assets/project1.PNG";
import Project2 from "../../Assets/project-2.PNG";
import Project3 from "../../Assets/portfolio.PNG";
import Arrow from "../../Assets/arrow-right.svg";
function Project() {
  return (
    <section className="bg-[#000000] px-[80px] py-[101px] ">
      <h1 className="text-[64px] text-white capitalize leading-[120%] font-semibold ">
        My Project
      </h1>
      <div className="flex mt-[52px] gap-[32px]">
        <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[30px] ">
          <img src={Project1} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Basic Tailwind Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skill Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              HTML
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              Tailwind CSS
            </p>
          </div>
          <div className="absolute flex left-[72%] curson-pointer bottom-[5px] ">
            <p className="text-[15px] italic hover:mr-[8px] transition-all duration-300 ">Read More</p>
            <img src={Arrow} className="w-[17px]" alt="" />
          </div>
        </div>
        <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[30px] ">
          <img src={Project2} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Altittude Charter
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skill Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              HTML
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              Tailwind CSS
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              JavaScript
            </p>
          </div>
          <div className="absolute flex left-[72%] curson-pointer bottom-[5px] ">
            <p className="text-[15px] italic hover:mr-[8px] transition-all duration-300 ">Read More</p>
            <img src={Arrow} className="w-[17px]" alt="" />
          </div>
        </div>
        <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[30px] ">
          <img src={Project3} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Portfolio Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skill Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              Reactjs
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white ">
              Tailwind CSS
            </p>
          </div>
          <div className="absolute flex  left-[72%] curson-pointer bottom-[5px] ">
            <p className="text-[15px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
            <img src={Arrow} className="w-[17px]" alt="" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Project;
