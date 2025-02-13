import React from "react";  
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import backgroundImage from "../assets/images/aboutusbg.svg"; // Make sure to place the image in the correct path

const AboutUs = () => {
  return (
    <>
      <div
        className="aboutus-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="aboutus-content">
          <h1>About Us</h1>
          <p>
            Welcome to Owow, where elegance meets craftsmanship. We believe that
            jewelry is more than just an accessory—it’s an expression of your
            personality, style, and story.
          </p>
          <p>
            At Owow, we specialize in beautifully crafted rings, earrings,
            necklaces, and more, designed to add a touch of sophistication to
            every moment. Our pieces are made with precision, ensuring that
            each detail shines with grace and beauty.
          </p>
          <p>
            Whether you’re looking for timeless classics or trendy designs, we
            have something special for you. Every piece at Owow is created with
            love, ensuring that you feel confident and radiant whenever you
            wear our jewelry.
          </p>
          <p>
            Discover the magic of Owow and let our jewelry be a part of your
            story.
          </p>

          {/* Owner Information */}
          <div className="owner-info">
            <h2>Meet the Founder</h2>
            <p>
              Owow was founded by <strong>Lukky Yadav</strong>, a passionate entrepreneur with a vision to blend 
              elegance and craftsmanship into every piece of jewelry. With a deep appreciation 
              for art and design, Lukky Yadav created Owow to offer unique, beautifully crafted jewelry 
              that enhances every occasion. His dedication to quality and innovation has made Owow a 
              brand that stands for sophistication, grace, and timeless beauty.
            </p>
            <p>
              Lukky believes that jewelry is not just an accessory but a reflection of one's 
              personality and emotions. His mission is to provide exquisite jewelry that tells 
              a story and creates lasting memories.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
