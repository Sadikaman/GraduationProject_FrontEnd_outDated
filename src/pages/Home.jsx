import React from "react";
import  Hero  from "../component/Hero";
import  CountryCard   from "../component/CountryCard";
// import { Carousels } from "../components/Carousel";
import  BookTicket  from "../component/BookTicket";
import  HomeContent  from "../component/HomeContent";
import Nav from "../component/Nav";
import Footers from "../component/Footers";
const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden dark:bg-gray-900">
      <Nav/>
      <Hero />
      <CountryCard />
      <BookTicket />
      <HomeContent />
      <Footers />
      {/* <Carousels /> */}
    </div>
  );
};

export default Home;
