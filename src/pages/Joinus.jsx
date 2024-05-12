import React, { useState } from "react";
import { Button } from "flowbite-react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { BsCartDashFill } from "react-icons/bs";

const Joinus = () => {
  const [isTourist, setIsTourist] = useState(false);

  const handleCheckboxChange = (isTourist) => {
    setIsTourist(isTourist);
  };

  const handleContinue = () => {
    const registerPage = isTourist ? "/Register" : "/RegisterServicesProvider";
    window.location.href = registerPage; // Redirect to the selected page
  };

  return (
    <div className="font-kanit transition-colors flex justify-center  items-center w-screen h-screen overflow-hidden">
     
      <div className="flex flex-col md:flex-row gap-16 flex-wrap justify-center">
        <div className="flex flex-col ">
      <div className="w-[100px] h-[100px] rounded-full   relative overflow-hidden">
              <img
                src="/AfroLogo.png"
                alt="AfroLogo"
                className="object-cover absolute inset-0 m-auto"
              />
             
            </div>
      <h1 className="pt-10 text-4xl font-semibold ">Join as a Tourist or a service Provider</h1>
      </div>
        <form className="flex flex-col py-3 px-6 w-full flex-wrap ">
          {/* Your other form elements */}
          <div className="lg:flex-row flex flex-row gap-16 md:flex-col sm:flex-col flex-wrap pt-2 justify-center">
            <div className="mt-4 border-2 border-black w-72 h-80 flex flex-col items-end p-2 rounded-3xl">
              <input
                type="checkbox"
                checked={isTourist}
                onChange={() => handleCheckboxChange(true)}
                className="mr-2 rounded-full w-10 h-10"
                id="touristCheckbox"
                required
              />
              <div className="m-10">
                <FaPersonWalkingLuggage className="text-[60px]" />
                <label className="text-3xl" htmlFor="touristCheckbox">
                  I am a Tourist
                </label>
              </div>
            </div>
            <div className="mt-4 border-2 border-black w-72 h-80 flex flex-col items-end p-2 rounded-3xl">
              <input
                type="checkbox"
                checked={!isTourist}
                onChange={() => handleCheckboxChange(false)}
                className="mr-2 rounded-full w-10 h-10"
                id="serviceProviderCheckbox"
                required
              />
              <div className="m-10">
                <BsCartDashFill className="text-[60px]" />
                <label className="text-3xl" htmlFor="serviceProviderCheckbox">
                  I am a Service Provider
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-center items-center">
            <Button
              className="rounded-full w-32"
              pill="true"
              size="md"
              color="dark"
              onClick={handleContinue}
            >
              Continue
            </Button>
            <p className="mt-4 flex gap-2 text-gray-500 text-md">
              I don't have an account{" "}
              <a href="/Login" className="hover:underline text-blue-600 font-medium">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Joinus;
