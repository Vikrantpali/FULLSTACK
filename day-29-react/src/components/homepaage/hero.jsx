import React, { useState } from "react";

function Hero() {
    const [count, setCount] = useState(0);
    return (
        <main id="hero" className="h-[100vh] pl-[80px] max-lg:px-[40px] max-md:px[20px] pt-[250px] max-sm:pt-[150px]">
      <h1 className="w-[700px] max-md:w-full text-[78px] max-md:text-[56px] max-sm:text-[44px] leading-[100%]">
        Welcome to my website
      </h1>
      <a href="#about">
        <button
          className="px-[36px] max-sm:w-[90%] max-sm:absolute max-sm:bottom-[40px] max-sm:right-[15px] py-[8px] mt-[24px] border-[1px] border-black rounded-[35px] hover:bg-black hover:text-white max-sm:text-white max-sm:bg-black duration-500 transition-all"
        >
          About
        </button>
      </a>
    </main>
    );
}

export default  Hero;