import React from "react";
import MyImg from "../../Assets/MyImg.jpg"

function About (){
    return(
        <section className="px-[80px] pt-[51px] pb-[121px]">
            <div className="flex gap-[52px] justify- items-center">
                <img width={350} className="rounded-[13px]" src={MyImg} alt="" />
                <div className="flex flex-col gap-[12px] ">
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">Name:</h1>
                    <p className="text-[24px] leading-[120%] italic "> Vikrant Pali</p>
                    </div>
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">DOM:</h1>
                    <p className="text-[24px] leading-[120%] italic "> 03/03/1999</p>
                    </div>
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">Highest Qualification:</h1>
                    <p className="text-[24px] leading-[120%] italic "> M.M.S./BCA</p>
                    </div>
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">Passed out Year:</h1>
                    <p className="text-[24px] leading-[120%] italic "> 2021</p>
                    </div>
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">Experiance:</h1>
                    <p className="text-[24px] leading-[120%] italic "> Intern at Parallel EduTech</p>
                    </div>
                    <div className="flex items-end gap-[12px] ">
                    <h1 className="text-[30px] leading-[120%] font-bold ">Tech Stack:</h1>
                    <p className="text-[24px] leading-[120%] italic "> MERN Stack</p>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-start">
            <p className="mt-[52px] w-[1024px] ">"I am currently interning at Parallel Edutech Pvt. Ltd., where I am gaining hands-on experience in MERN stack development. This internship is providing me with the opportunity to work with <strong> MongoDB, Express.js, React.js, and Node.js,</strong> helping me build <strong>full-stack web applications.</strong> I'm developing my skills in both frontend and backend technologies, while also learning about best practices in software development and collaborating in an agile environment. It's a great opportunity to apply my knowledge and expand my expertise in modern web development."</p>
            </div>
            <div className="flex justify-end">
            <p className="mt-[52px] w-[1024px] ">I completed my Bachelor's degree in Computer Applications (BCA) in 2019, where I developed a strong foundation in programming, software development, and IT systems. Building on that technical background, I Completed an M.M.S in Marketing, graduating in 2021. </p>
            </div>
            <div className="flex justify-start">
            <p className="mt-[52px] w-[1024px] ">In the future, I aim to continue growing as a full-stack developer, deepening my expertise in the MERN stack while exploring new technologies and frameworks. I’m excited to take on more complex projects, contribute to innovative solutions, and work in dynamic, collaborative environments to further enhance my skills in both frontend and backend development.</p>
            </div>
            
        </section>
    )

}

export default About;