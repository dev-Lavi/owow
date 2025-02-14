import React from "react";   
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/aboutus.css";
import backgroundImage from "../assets/images/aboutusbg.svg"; 
import ownerImage from "../assets/images/owner.jpg"; // Make sure to place the image in the correct path

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

          {/* Founder Section */}
          <div className="owner-info">
            <h2>Meet the Founder</h2>
            <div className="owner-details">
              <img src={ownerImage} alt="Lucky Yadav - Founder of Owow" className="owner-image" />
              <div className="owner-text">
                <p>
                  <strong>Lucky Yadav</strong>, a passionate entrepreneur 
                  with a vision to blend elegance and craftsmanship into every piece of jewelry. 
                  With a deep appreciation for art and design, Lucky created Owow to offer 
                  unique, beautifully crafted jewelry that enhances every occasion.
                </p>
                <p><strong>Contact Lucky:</strong></p>
                <p>Email: <a href="mailto:ylakky780@gmail.com">ylakky780@gmail.com</a></p>
                <p>Phone: <a href="tel:+918384876037">+91 8384876037</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
