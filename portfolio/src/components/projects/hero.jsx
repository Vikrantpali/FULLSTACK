import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero(){
    const {theme} = useContext(ThemeContext);
    return(
        <main className={`${
            theme === "light"
              ? "text-black"
              : "text-white bg-black"
          } px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[650px] h-[700px] relative pt-[180px] max-sm:pt-[120px] `}>
            <h1 className="text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[55px] font-semibold w-[1000px] max-lg:w-full   capitalize leading-[120%]">
                Learn More about my skills and experience through my projects
            </h1>
        </main>
    )
}

export default Hero;