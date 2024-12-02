import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import Project1 from "../../Assets/project-2.PNG";

function Collage() {
    const {theme} = useContext(ThemeContext);
    return(
        <section className={`${
            theme === "light"
              ? "text-black bg-[whitesmoke]"
              : "text-white bg-[#000000BF]"
          } px-[80px] max-sm:px-[20px]  py-[51px] max-sm:py-[30px]`}>
            <div className="flex gap-[20px]">
            <img src={Project1} className="w-[49%]" width={700} alt="" />
            <img src={Project1} className="w-[49%]" width={700} alt="" />
            </div>
            <img src={Project1} className="mt-[20px]" alt="" />
        </section>
    )
}

export default Collage;