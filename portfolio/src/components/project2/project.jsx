import React from "react";
import Project1 from "../../Assets/project1.PNG";
import Project2 from "../../Assets/project-2.PNG";
import Project3 from "../../Assets/portfolio.PNG";
import Arrow from "../../Assets/arrow-right.svg";
import { Link } from "react-router-dom";

function Project() {
  return (
    <section className="bg-[#000000] px-[80px] max-md:px-[40px] max-sm:px-[20px] py-[101px] max-md:py-[51px] ">
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] text-white capitalize leading-[120%] font-semibold ">
        My Project
      </h1>
      <div className="flex mt-[52px] max-lg:flex-wrap gap-[32px]">
        <div className="w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative h-[350px] max-[1150px]:h-[300px] bg-white rounded-[7px] px-[12px] py-[30px] ">
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
          <Link
            to={"/project/tailwind-project"}
            className="absolute flex left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] curson-pointer bottom-[5px] "
          >
            <p className="text-[15px] italic hover:mr-[8px] transition-all duration-300 ">
              Read More
            </p>
            <img src={Arrow} className="w-[17px]" alt="" />
          </Link>
        </div>
        <div className="w-[400px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto max-lg:pb-[50px] hover:scale-105 transition-all duration-300 relative h-[350px] max-[1150px]:h-[300px] bg-white rounded-[7px] px-[12px] py-[30px] ">
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
          <Link
            to={"/project/portfolio-project"}
            className="absolute flex  left-[72%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[65%] curson-pointer bottom-[5px] "
          >
            <p className="text-[15px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img src={Arrow} className="w-[17px]" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
