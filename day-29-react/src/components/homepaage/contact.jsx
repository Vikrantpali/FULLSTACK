import React from "react";

function Contact(){
    return(
        <section
      id="contact"
      className="py-[121px] flex flex-col items-center px-[80px] max-lg:px-[40px] max-mad:px-[20px]"
    >
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] text-center mb-[42px]">Contact Us</h1>
      <form
        className="flex flex-col gap-[20px] w-[500px]  px-[20px] py-[30px] max-sm:w-full shadow-2xl rounded-[13px]"
        action=""
      >
        <input
          type="text"
          className="border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          name="Name"
          placeholder="Enter Your Name"
          id=""
        />
        <input
          type="text"
          className="border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          name="Email"
          placeholder="Enter Your email"
          id=""
        />
        <textarea
          name=""
          className="resize-none border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          id=""
          placeholder="Enter Your Massage"
        ></textarea>
        <button
          className="border-black border-[1px] py-[12px] rounded-[35px] hover:bg-black hover:text-white max-md:text-white max-md:bg-black duration-500 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
    )
}

export default Contact;