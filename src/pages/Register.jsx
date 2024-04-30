import React from "react";
import { Card, Label, Button } from "flowbite-react";

import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
   
    <div className="font-kanit transition-colors flex  justify-center w-screen h-screen ">
      <div className="flex flex-col md:flex-row gap-16  w-[80%] ">
          <form className="flex flex-col  py-3 px-6 w-full ">
            <div className="w-[100px] h-[100px] rounded-full   relative overflow-hidden">
              <img
                src="/AfroLogo.png"
                alt="AfroLogo"
                className="object-cover absolute inset-0 m-auto"
              />
             
            </div>
            <div className="pt-2">
            <h1 className="text-4xl font-semibold pt-2">Sign Up</h1>
             <p className="text-lg text-gray-500 pt-2">Enter your details below to create a new account and get started</p>
            </div>
            <div className=" grid-cols-1 md:grid-cols-2   pt-2 ">
              <div className=" lg:flex-row flex flex-row  gap-5 md:flex-col pt-2 ">
                <div className="flex flex-col gap-1 w-full">
                  <Label className="text-md pb-4 font-semibold pt-4 " value="Full Name" />
                  <input
                    type="text"
                    className=" rounded-md  border-1 border-gray-200 bg-gray-100   h-12 dark:bg-gray-900  dark:text-white  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col  w-full pt-1">
                <Label className="text-md pb-4 font-semibold pt-4" value="Email" />
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
              
              
              <div className="flex  gap-5">
               <div className="flex flex-col w-full">
                <Label className="text-md pb-4 font-semibold pt-4" value="Password" />
                <input
                  type="password"
                  className="rounded-md  border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900  dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
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
              
              <div className="flex  gap-5">
               <div className="flex flex-col w-full">
                <Label className="text-md pb-4 font-semibold pt-4" value="Password" />
                <input
                  type="password"
                  className="rounded-md  border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900  dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
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
              <Button className="rounded-md" pill="true" size="md" color="dark" href="/verify">
                Register
              </Button>
             
            </div>
            
           
            <p className="mt-4 flex justify-center gap-2 text-gray-500 text-md ">
              Already have an account?{" "}
              <a href="/login" className=" hover:underline text-black font-medium">
                Login
              </a>
            </p>


            <div className="flex justify-center items-center flex-col gap-1">

            <div className="gap-2 flex ">
            <h2 className="dark:text-white w-44 border-b-2 border-b-black  "></h2><span className="text-md font-medium text-center ">OR</span><h2 className="w-44 border-b-2 text-md border-b-black"></h2>
            </div>

            <Button  pill  className="flex flex-row  rounded-md w-[600px]  mt-4 bg-gray-200">
              <FcGoogle className="text-xl mr-8"/>
              Continue With Google
            </Button>
          </div>
          </form>
       
      </div>
    </div>
 
  );
};

export default Register;
