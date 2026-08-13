import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import FAQ from "./page/FAQ";
import ViceChancellor from "./page/ViceChancellor";
import Hero from "./page/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <ViceChancellor />
      <FAQ />
    </>
  );
};

export default Home;
