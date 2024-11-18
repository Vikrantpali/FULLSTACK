import React from "react";
import Project1 from "../../Assets/project1.PNG";
import Project2 from "../../Assets/project-2.PNG";
import Project3 from "../../Assets/portfolio.PNG";
import Arrow from "../../Assets/arrow-right.svg";

function Section() {
  return (
    <section className="px-[80px] py-[101px] bg-[white] ">
      <h1 className="text-[64px] capitalize leading-[120%] font-semibold ">
        Experiance And Skills :
      </h1>
      <p className="mt-[30px] w-[1024px]">
        My interest in becoming a web developer was sparked by the realization
        of how much impact technology has on everyday life, especially through
        web applications. The ability to build dynamic, user-friendly platforms
        that solve real-world problems intrigued me. As I delved deeper into
        Python and Django, I became excited about the potential to create
        seamless, interactive websites and applications. The process of
        transforming ideas into functional, scalable web solutions inspired me
        to pivot my career toward web development, where I can continuously
        learn, innovate, and contribute to creating meaningful digital
        experiences.
      </p>

      <p className="mt-[20px] w-[1024px]">
        "I am currently interning at Parallel Edutech Pvt. Ltd., where I am
        gaining hands-on experience in MERN stack development. This internship
        is providing me with the opportunity to work with{" "}
        <strong> MongoDB, Express.js, React.js, and Node.js,</strong> helping me
        build <strong>full-stack web applications.</strong> I'm developing my
        skills in both frontend and backend technologies, while also learning
        about best practices in software development and collaborating in an
        agile environment. It's a great opportunity to apply my knowledge and
        expand my expertise in modern web development."
      </p>
      <h1 className="mt-[30px] text-[20px]">Project-1</h1>
      <p className="mt-[10px] w-[1024px]">
        I developed this project using Tailwind CSS and HTML, leveraging the
        utility-first approach of Tailwind to create a responsive, modern, and
        clean design. By customizing the utility classes, I was able to
        efficiently build a user-friendly interface with a consistent layout,
        ensuring both functionality and aesthetics were seamlessly integrated.
        <a href="" className="underline">
          Click here
        </a>
        to visit my project.
      </p>
      <h1 className="mt-[30px] text-[20px]">Project-2</h1>
      <p className="mt-[10px] w-[1024px]">
        I developed the project using Tailwind CSS, HTML, and JavaScript to
        create a dynamic and responsive web application. Tailwind CSS provided a
        flexible and efficient way to design the layout, while HTML structured
        the content. JavaScript was used to add interactivity and enhance the
        user experience, making the project both visually appealing and
        functionally robust.
        <a href="" className="underline">
          Click here
        </a>
        to visit my project.
      </p>
      <h1 className="mt-[30px] text-[20px]">Project-3</h1>
      <p className="mt-[10px] w-[1024px]">
        I developed the project using React.js for building the user interface,
        leveraging its component-based architecture for efficient and reusable
        code. For styling, I used Tailwind CSS, which allowed for rapid and
        flexible design with utility-first classes, ensuring a responsive and
        modern look. This combination of React.js and Tailwind CSS provided a
        streamlined development process, resulting in a clean, dynamic, and
        visually appealing web application.{" "}
        <a href="" className="underline">
          Click here
        </a>
        to visit my project.
      </p>
    </section>
  );
}

export default Section;
