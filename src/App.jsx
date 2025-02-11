import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/HeroSection";
import Categories from "./components/categories";
import AfterGoldenHour from "./components/AfterGoldenHour";
import GiftOfTheSeason from "./components/GiftOfTheSeason";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import WhatWeAreMadeFor from "./components/WhatWeAreMadeFor";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <AfterGoldenHour />
      <GiftOfTheSeason />
      <WhatWeAreMadeFor />
      <Footer />
      <h1 className="text-center text-4xl mt-10">Welcome to Owow Jewellery</h1>
    </div>
  );
}

export default App;
