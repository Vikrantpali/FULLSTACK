import React from "react";
import Hero from "../components/homepage/hero";
import About from "../components/aboutpage/hero"
import Contact from "../components/homepage/contact";
import Section from "../components/servicePages/section";

function Home(){
    return(
        <>
        <Hero />
        <About/>  
        <Section/>  
        <Contact/>  
        </>
    )
}

export default Home;