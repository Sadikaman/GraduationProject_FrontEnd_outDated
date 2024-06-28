import React from "react";
import { Label, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { DarkModeProvider } from "../component/DarkModeProvider";
const RegisterServicesProvider = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <DarkModeProvider>
    <div className="font-kanit transition-colors flex flex-wrap justify-center items-center min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-800 p-4">
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-4xl justify-center">
        <form className="flex flex-col py-3 px-6 w-full  ">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/AfroLogo.png"
              alt="AfroLogo"
              className="w-32 md:w-40"
            />
            <h1 className="text-2xl md:text-4xl font-semibold pt-2 text-center">
              Sign up and work with us
            </h1>
            <Button
              pill
              className="flex flex-row rounded-md w-full max-w-xs mt-4 bg-gray-200"
            >
              <FcGoogle className="text-xl mr-2" />
              Continue With Google
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-5 pt-4">
            <div className="flex flex-col w-full">
              <Label className="text-md pb-2 font-semibold" value="First Name" />
              <input
                type="text"
                required
                className="rounded-md border border-gray-300 bg-gray-100 h-12 px-3 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="text-md pb-2 font-semibold" value="Last Name" />
              <input
                type="text"
                required
                className="rounded-md border border-gray-300 bg-gray-100 h-12 px-3 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 pt-4">
            <div className="flex flex-col w-full">
              <Label className="text-md pb-2 font-semibold" value="Password" />
              <input
              required
                type="password"
                className="rounded-md border border-gray-300 bg-gray-100 h-12 px-3 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="text-md pb-2 font-semibold" value="Confirm Password" />
              <input
              required
                type="password"
                className="rounded-md border border-gray-300 bg-gray-100 h-12 px-3 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <input
              type="checkbox"
              className="mr-2 dark:bg-gray-700 dark:text-white"
              id="termsCheckbox"
              required
            />
            <label className="text-center md:text-left" htmlFor="termsCheckbox">
              By creating an account, I agree to the{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400">Terms of Use</a> and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400">Privacy Policy</a>.
            </label>
          </div>
          <div className="mt-6 flex flex-col justify-center md:flex-row gap-4 w-full">
            <button
              className="rounded-md w-full xl:w-full p-2 md:w-auto border shadow-md shadow-cyan-500"
              type="reset"
              name="Cancel"
              value="Cancel"
            
            >
              Cancel
            </button>
            <a href="VerifyRegisterServicesProvider">gg</a>
              <button
                className="rounded-md   w-full xl:w-full p-2 lg:w-full md:w-auto  border bg-black text-white shadow-md shadow-cyan-500"
                type="submit"
                name="Login"
                value="Login"
              >
                Register
              </button>
           
          </div>
        </form>
      </div>
    </div>
    </DarkModeProvider>
  );
};

export default RegisterServicesProvider;
