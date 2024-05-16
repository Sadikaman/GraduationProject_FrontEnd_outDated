import React, { useState } from "react";
import { Card, Label, Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const countries = [
  { value: "AF", label: "Afghanistan", flag: "🇦🇫" },
  { value: "AL", label: "Albania", flag: "🇦🇱" },
  { value: "Am", label: "America", flag: "🇦🇱" },
  { value: "Et", label: "Ethiopia", flag: "🇦🇱" },
  { value: "Ge", label: "Germany", flag: "🇦🇱" },
  { value: "Ho", label: "Holand", flag: "🇦🇱" },
  { value: "Sp", label: "Spain", flag: "🇦🇱" },
  { value: "Uk", label: "uk", flag: "🇦🇱" },
  // Add more countries here...
];
const Register = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="font-kanit transition-colors flex justify-center w-screen h-screen ">
      <div className="flex flex-col md:flex-row gap-16 w-[80%] ">
        <form className="flex flex-col py-3 px-6 w-full ">
          <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden">
            <img
              src="/AfroLogo.png"
              alt="AfroLogo"
              className="object-cover absolute inset-0 m-auto"
            />
          </div>
          <div className="pt-2">
            <h1 className="text-4xl font-semibold pt-2">Sign Up</h1>
            <p className="text-lg text-gray-500 pt-2">
              Enter your details below to create a new account and get started
            </p>
          </div>
          <div className="grid-cols-1 md:grid-cols-2 pt-2">
            <div className="lg:flex-row flex flex-row gap-5 md:flex-col pt-2 ">
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4 "
                  value="Full Name"
                />
                <input
                  type="text"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col w-full pt-1">
                <Label
                  className="text-md pb-4 font-semibold pt-4"
                  value="Email"
                />
                <input
                  type="email"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4"
                  value="Date of Birth"
                />
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select your date of birth"
                  className="rounded-md w-full border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray- dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-3"
                  value="Phone Number"
                />
                <input
                  type="password"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4"
                  value="Nationality"
                />
                <Select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  options={countries}
                  isSearchable
                  placeholder="Search or select a country"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #CBD5E0",
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary: "#3182CE",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-3"
                  value="Gender"
                />
                <div className="relative">
                  <select
                    value={gender}
                    onChange={handleGenderChange}
                    className="rounded-md border-1 border-gray-200 w-full bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200 appearance-none"
                  >
                   
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 18a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-4"
                  value="Password"
                />
                <input
                  type="password"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <Label
                  className="text-md pb-4 font-semibold pt-3"
                  value="Confirm Password"
                />
                <input
                  type="password"
                  className="rounded-md border-1 border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
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
                <h2 className="dark:text-white w-44 border-b-2 border-b-black "></h2>
                <span className="text-md font-medium text-center ">OR</span>
                <h2 className="w-44 border-b-2 text-md border-b-black"></h2>
              </div>

              <Button pill className="flex flex-row rounded-md w-[600px] mt-4 bg-gray-200">
                <FcGoogle className="text-xl mr-8" />
                Continue With Google
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
