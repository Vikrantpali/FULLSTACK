import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero(){
    const heading = useRef(null);

    useEffect(() =>{
        gsap.to(heading.current, {duration: 1, x: 0})
    }, [])
    return(
        <main className="pt-[250px] h-[100vh] overflow-hidden w-[90%] ml-[10%]">
            <h1 ref={heading} className="text-[108px] -translate-x-[100%]">
                This is heading
            </h1>
        </main>
    )
}

export default Hero;