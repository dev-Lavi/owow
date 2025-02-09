import React from "react";   
import "../styles/hero.css";
import HeroImage from "../assets/images/image1.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Correct Positioning */}
      <img 
        src={HeroImage} 
        alt="Jewelry Hero" 
        className="absolute inset-0 top-[36px] w-full h-full object-cover object-[50%_0%]"
      />

      {/* Text Content */}
      <div className="absolute top-[45%] left-[5%] text-black max-w-lg">
        <h1 className="text-6xl font-serif font-medium leading-tight">
          Welcome the <br /> Season of Change
        </h1>
        <p className="text-xl mt-3 leading-normal">
          Fall has arrived. Shop for our new releases <br /> starting today.
        </p>
        <button className="mt-5 px-6 py-2 bg-transparent border border-black text-black text-lg font-medium rounded-md hover:bg-black hover:text-white transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
