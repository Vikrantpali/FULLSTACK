import React from "react";

function Hero() {
  return (
    <main className="px-[80px] h-[650px] overflow-hidden relative pt-[250px] ">
      <h1 className="text-[92px] font-semibold fixed z-[-1] w-[900px] text-white capitalize leading-[120%]">
        Welcome to my portfolio website
      </h1>
      <div className="absolute w-full top-0 z-[-5] left-0">
        <img
          className="w-full fixed blur-[5px]"
          src={
            "https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
      </div>
    </main>
  );
}

export default Hero;
