import React from "react";
import "../styles/hero.css";
import HeroImage from "../assets/images/image1.svg";

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Background Image */}
      <img src={HeroImage} alt="Jewelry Hero" className="hero-image" />

      {/* Text Content */}
      <div className="hero-text">
        <h1>Welcome the <br /> Season of Change</h1>
        <p>Fall has arrived. Shop for our new releases starting today.</p>
        <button className="button-custom">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
