import React from "react";
import { Label, Button } from "flowbite-react";
import { PiHandWaving } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { DarkModeProvider } from "../component/DarkModeProvider";
const Login = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <DarkModeProvider>
    <div className="font-kanit transition-colors flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-800 p-4">
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-2xl md:max-w-4xl">
        <form className="flex flex-col py-3 px-6 w-full">
          <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden mx-auto md:mx-0">
            <img
              src="/AfroLogo.png"
              alt="AfroLogo"
              className="object-cover absolute inset-0"
            />
          </div>
          <div className="pt-2 text-center md:text-left gap-3">
            <h1 className="text-4xl font-semibold pt-2 flex gap-4 justify-center md:justify-start">
              Welcome back <PiHandWaving className="text-yellow-300" />
            </h1>
            <p className="text-lg text-gray-500 pt-2">
              Glad to see you again! Login to your account below
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col w-full">
              <Label className="text-md pb-1 font-semibold" value="Email" />
              <input
                type="email"
                placeholder="Example@gmail.com"
                required
                className="rounded-md border border-gray-300 bg-gray-100 h-12 dark:bg-gray-700 dark:text-white px-3"
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="text-md pb-1 font-semibold" value="Password" />
              <input
                type="password"
                required
                placeholder="*********"
                className="rounded-md border border-gray-300 bg-gray-100 h-12 dark:bg-gray-700 dark:text-white px-3"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2 dark:bg-gray-700 dark:text-white"
              id="termsCheckbox"
            />
            <label htmlFor="termsCheckbox">Remember me</label>
          </div>
          <div className="mt-6">
            <input
              className="rounded-md w-full bg-[#101010] text-[#ffffff] p-2 cursor-pointer"
              type="submit"
              name="Login"
              value="Login"
            />
          </div>
          <p className="mt-4 text-center text-gray-500 text-md">
            Don't have an account?{" "}
            <a
              href="/Register"
              className="hover:underline text-black font-medium"
            >
              Register
            </a>
          </p>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center w-full">
              <h2 className="w-full border-b border-black" />
              <span className="mx-2 text-md font-medium">OR</span>
              <h2 className="w-full border-b border-black" />
            </div>
            <Button
              pill
              className="flex items-center justify-center rounded-md w-full max-w-xs mt-4 bg-gray-200"
            >
              <FcGoogle className="text-xl mr-2" />
              Continue With Google
            </Button>
          </div>
        </form>
      </div>
    </div>
    </DarkModeProvider>
  );
};

export default Login;
