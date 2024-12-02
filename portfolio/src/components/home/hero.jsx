import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const {theme} = useContext(ThemeContext);
  return (
    <main className="px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[650px] overflow-hidden relative max-[500px]:pt-[200px] pt-[250px] ">
      <h1 className={`text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[55px] font-semibold fixed z-[-1] ${
                theme === "light"
                  ? "text-white"
                  : "text-black"
              } w-[900px] max-lg:w-[90%] capitalize leading-[120%]`}>
        Welcome to my portfolio website
      </h1>
      <div className="absolute w-full top-0 z-[-5] left-0">
        <img
          className="w-full max-md:h-[100vh] fixed blur-[5px]"
          src={
            "https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
        {theme === "dark" && <div className="bg-[#ffffff22] absolute top-0 left-0 w-full h-[100vh] "></div>}
      </div>
    </main>
  );
}

export default Hero;
