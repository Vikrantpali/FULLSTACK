import React from "react";
import Dog from "../../assets/Gog.jpg"

function About(){
    return(
        <section
      id="about"
      className="py-[121px] px-[80px] flex gap-[65px] max-[1370px]:gap-[40px] max-[885px]:flex-col items-center max-lg:px-[40px] max-md:px-[20px]"
    >
      <img src={Dog} className="rounded-[50%] max-[1130px]:w-[300px]" alt="" />
      <div>
        <h1 className="text-[34px] mb-[24px] max-[885px]:text-center">About us</h1>
        <p className="w-[700px] max-[1370px]:w-[550px] max-[885px]:text-center max-[885px]:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          aliquam amet voluptas inventore nisi vel nihil cupiditate voluptates
          quis eos sequi, corrupti quae laborum quia, et necessitatibus saepe
          porro distinctio repudiandae veritatis cum iure rerum? Dignissimos
          doloremque quo enim at similique nesciunt repellendus nobis nisi eius
          molestiae amet saepe earum, maxime quia ipsum, vero corrupti, soluta
          minima fugit provident. Asperiores tempore sit libero, possimus
          distinctio facere labore dolorem quas hic cumque aperiam non rerum
          facilis repellat nemo nisi ut deserunt est amet? Nulla, est obcaecati
          porro labore necessitatibus similique quo voluptas sequi vitae at
          tempore quia ex ab consectetur sapiente.
        </p>
      </div>
    </section>
    );
}

export default About;