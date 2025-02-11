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

      {/* Text Content (Left-Aligned) */}
      <div className="absolute top-[45%] left-[5%] text-black max-w-lg text-left">
        <h1 className="text-6xl font-[Cormorant_Garamond] font-medium leading-tight">
          Welcome the <br /> Season of Change
        </h1>
        <p className="text-xl leading-normal" style={{ fontSize: "1.7rem", marginTop: "1px", fontFamily: "'Karla', sans-serif" }}>
         Fall has arrived. Shop for our new releases starting today.
        </p>

        <button className="button-custom" style={{ fontFamily: "'Karla', sans-serif" }}>
         Shop Now
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
