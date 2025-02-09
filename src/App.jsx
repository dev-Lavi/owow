import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/HeroSection";
import Categories from "./components/categories";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <Footer />
      <h1 className="text-center text-4xl mt-10">Welcome to Owow Jewellery</h1>
    </div>
  );
}

export default App;
