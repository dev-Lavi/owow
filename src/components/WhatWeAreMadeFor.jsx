import React from "react";  
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/WhatWeAreMadeFor.css";
import section3Image from "../assets/images/section3.svg"; // Import image

const WhatWeAreMadeFor = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="made-for-section">
      <div className="made-for-container">
        {/* Image on the left */}
        <div className="made-for-image-container">
          <img 
            src={section3Image} 
            alt="Sunset View with Chairs" 
            className="made-for-image" 
          />
        </div>

        {/* Text on the right */}
        <div className="made-for-content">
          <h2 className="made-for-title">What were we made for?</h2>
          <p className="made-for-description">
            At Owow, we were made to celebrate beauty, craftsmanship, 
            and the art of self-expression. Jewelry is more than just an 
            ornament—it’s a statement, a story, a reflection of who you are. 
            Every piece we create is designed with passion and precision, 
            ensuring that it complements your elegance and individuality.
            <br /><br />
            From the sparkle of a perfectly cut gemstone to the delicate 
            curves of a finely crafted ring, our jewelry is made to illuminate 
            your moments, big or small. We believe in timeless designs, 
            meaningful pieces, and the power of jewelry to make you feel 
            extraordinary. Owow—crafted for you, made to shine.
          </p>
          {/* Updated button with navigation */}
          <button className="made-for-button" onClick={() => navigate("/about-us")}>
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreMadeFor;
