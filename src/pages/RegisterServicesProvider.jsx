import React from "react";
import { Card, Label, Button } from "flowbite-react";

import { FcGoogle } from "react-icons/fc";
const RegisterServicesProvider = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
   
    <div className="font-kanit transition-colors flex  justify-center items-center w-screen h-screen ">
      <div className="flex flex-col md:flex-row gap-16  w-[80%]  justify-center">
          <form className="flex flex-col  py-3 px-6 w-full ">
          <div className="flex flex-col justify-center items-center">
              <img
                src="/AfroLogo.png"
                alt="AfroLogo"
                className="w-40 "
              />
             
            
           
            <h1 className="text-4xl font-semibold pt-2">Sign up and work with us </h1>
            <Button  pill  className="flex flex-row  rounded-md w-[600px]  mt-4 bg-gray-200">
              <FcGoogle className="text-xl mr-8"/>
              Continue With Google
            </Button>
            </div>


            <div className=" grid-cols-1 md:grid-cols-2   pt-2 ">
              <div className=" lg:flex-row flex flex-row  gap-5 md:flex-col pt-2 ">
                <div className="flex flex-col gap-1 w-full">
                  <Label className="text-md pb-4 font-semibold pt-4 " value="First Name" />
                  <input
                    type="text"
                    className=" rounded-md  border-1 border-gray-200 bg-gray-100   h-12 dark:bg-gray-900  dark:text-white  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col  w-full pt-1">
                <Label className="text-md pb-4 font-semibold pt-4" value="Last Name" />
                <input
                  type="email"
                  className="rounded-md  border-1 border-gray-200 bg-gray-100  h-12 dark:bg-gray-900  dark:text-white  hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              </div>


              <div className="flex  gap-5">
               <div className="flex flex-col w-full">
                <Label className="text-md pb-4 font-semibold pt-4" value="Password" />
                <input
                  type="password"
                  className="rounded-md  border-1 border-gray-200 bg-gray-100 h-12  dark:bg-gray- dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                />
                </div>
                <div className="flex flex-col gap-1 w-full">
                <Label className="text-md pb-4 font-semibold pt-3" value="Confirm Password" />
                <input
                  type="password"
                  className="rounded-md  border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900  dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              </div>
              
              
              

            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                className="mr-2 "
                id="termsCheckbox dark:bg-gray-900 dark:text-white shadow-lg "
                required
              />
              <label htmlFor="termsCheckbox">
                By creating an account, I agree to the{" "}
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
            <Button className="rounded-md" pill="true" size="md" color="light">
                Cancel
              </Button>
             
             <a href="/VerifyRegisterServicesProvider">
              <Button className="rounded-md w-full" pill="true" size="md" color="dark" >
                Register
              </Button>
              </a>
            </div>
            
        
          </form>
       
      </div>
    </div>
 
  );
};

export default RegisterServicesProvider;
