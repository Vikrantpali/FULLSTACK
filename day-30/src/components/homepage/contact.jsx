import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";


function Contact() {
  const { theme } = useContext(ThemeContext);

  const [formData, setformData] = useState({ 
    Name: "", 
    Email: "", 
    message: "", 
  });
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMeassage, setValidMeassage] = useState(true);
  const [submit, setsubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(formData.Name ===  "") {
      setValidName(false);
    }else{
      setValidName(true);
    }
    if(formData.Email === ""){
      setValidEmail(false);
    }else{
      setValidEmail(true);
    }
    if(formData.message === ""){
      setValidMeassage(false);
    }else{
      setValidMeassage(true);
    }
    if(formData.Name !== '' && formData.Email !== '' && formData.message !== '' ){
      setsubmit(true);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <section
      id="contact"
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
        
      }}
      className="py-[121px] flex flex-col items-center px-[80px] max-lg:px-[40px] max-mad:px-[20px]"
    >
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] text-center mb-[42px]">
        Contact Us
      </h1>
      <form
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
        boxShadow: theme === "light" ? "0px 0px 10px black" : "0px 0px 50px white",
      }}
        className="flex relative flex-col gap-[20px] w-[500px]  px-[20px] py-[30px] max-sm:w-full shadow-2xl rounded-[13px]"
        action=""
      >
        <input
        style={{
          background: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "white",
        }}
          type="text"
          className={
            validName === false
              ? "border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              : "border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          }
          name="Name"
          onChange={handleChange}
          placeholder="Enter Your Name"
          id=""
        />
        {
          validName === false &&
          <p className="absolute  right-[30px] text-[red] top-[9px] bg-white p-[8px]">This field is required*</p>
        }
        <input
        style={{
          background: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "white",
        }}
          type="text"
          className={
            validEmail === false
              ? "border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              : "border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"
          }
          name="Email"
          onChange={handleChange}
          placeholder="Enter Your email"
          id=""
        />
        {
          validEmail === false &&
          <p className="absolute  right-[30px] text-[red] top-[70px] bg-white p-[8px]">This field is required*</p>
        }
        <textarea
        style={{
          background: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "white",
        }}
          name="message"
          onChange={handleChange}
          className={validMeassage === false ?
            "resize-none border-[1px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
            :"resize-none border-[1px] border-black pl-[12px] py-[7px] rounded-[7px]"}
          id=""
          placeholder="Enter Your Massage"
        ></textarea>
        {
          validMeassage === false &&
          <p className="absolute  right-[30px] text-[red] top-[130px] bg-white p-[8px]">This field is required*</p>
        }
        <button
          onClick={handleSubmit}
          className="border-black border-[1px] py-[12px] rounded-[35px] hover:bg-black hover:text-white max-md:text-white max-md:bg-black duration-500 transition-all"
        >
          Submit
        </button>
      </form>
      {submit && (  
        <div className="bg-[#00000066] fixed flex justify-center items-center top-0 left-0 w-full h-[100vh]">
        <div className="w-[500px] h-[300px] py-[50px] bg-white rounded-[13px] ">
          <h1 className="text-center text-[36px] font-semibold">Form have been submitted</h1>
          <p className="text-center text-[18px] w-[300px] m-auto mt-[20px]">Thanks for submitting form. We will get back to you soon.</p>
          <button onClick={() => setsubmit(false)} className="border-[red] py-[10px] w-[140px] px-[35px] text-[red] ml-[180px] mt-[30px] border-[1px] rounded-[7px] ">Close</button>
        </div>
      </div>)}
    </section>
  );
}

export default Contact;
