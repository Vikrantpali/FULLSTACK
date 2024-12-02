import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

function Section() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={`${
      theme === "light"
        ? "text-black"
        : "text-white bg-black"
    } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px] `}>
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold ">
        Description And Skills :
      </h1>
      <p className="mt-[30px] max-xl:w-full w-[1024px]">
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

      <p className="mt-[20px] max-xl:w-full w-[1024px]">
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
      <h1 className="mt-[30px] text-[20px]">HTML:</h1>
      <p className="mt-[10px] max-xl:w-full w-[1024px]">
        I developed this project using Tailwind CSS and HTML, leveraging the
        utility-first approach of Tailwind to create a responsive, modern, and
        clean design. By customizing the utility classes, I was able to
        efficiently build a user-friendly interface with a consistent layout,
        ensuring both functionality and aesthetics were seamlessly integrated.
      </p>
      <h1 className="mt-[30px] text-[20px]">Tailwind CSS:</h1>
      <p className="mt-[10px] max-xl:w-full w-[1024px]">
        I developed the project using Tailwind CSS, HTML, and JavaScript to
        create a dynamic and responsive web application. Tailwind CSS provided a
        flexible and efficient way to design the layout, while HTML structured
        the content. JavaScript was used to add interactivity and enhance the
        user experience, making the project both visually appealing and
        functionally robust.
      </p>
      <h1 className="mt-[30px] text-[20px]">ReactJs</h1>
      <p className="mt-[10px] max-xl:w-full w-[1024px]">
      I developed the project using React.js for building the user interface, leveraging its component-based architecture for efficient and reusable code. For styling, I used Tailwind CSS, which allowed for rapid and flexible design with utility-first classes, ensuring a responsive and modern look. This combination of React.js and Tailwind CSS provided a streamlined development process, resulting in a clean, dynamic, and visually appealing web application.
      </p>
      <h1 className="mt-[30px] text-[20px]">Responsiveness</h1>
      <p className="mt-[10px] max-xl:w-full w-[1024px]">
        I developed the project using React.js for building the user interface,
        leveraging its component-based architecture for efficient and reusable
        code. For styling, I used Tailwind CSS, which allowed for rapid and
        flexible design with utility-first classes, ensuring a responsive and
        modern look. This combination of React.js and Tailwind CSS provided a
        streamlined development process, resulting in a clean, dynamic, and
        visually appealing web application.{" "}
        <Link to={'/'} target="_blanck" className="underline">
          Click here  
        </Link>
        {" "}to visit my project.
      </p>
    </section>
  );
}

export default Section;
