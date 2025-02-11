import React from "react";
import "../styles/GiftOfTheSeason.css"; // Import the CSS file
import giftImage from "../assets/images/img2.svg"; // Replace with your actual image path

const GiftOfTheSeason = () => {
  return (
    <section className="gifts-section">
      <div className="gifts-container">
        {/* Left Text Content */}
        <div className="gifts-content">
          <h2 className="gifts-title">Gifts of the Season</h2>
          <p className="gifts-description">
            Celebrate the joy of giving with timeless elegance. This season, let Owow be your
            destination for exquisite jewelry that speaks of love, warmth, and cherished moments.
            From dazzling earrings that twinkle like festive lights to intricately crafted rings
            and necklaces, each piece is designed to make every occasion special.
          </p>
          <p className="gifts-description">
            Whether you're treating yourself or surprising someone dear, our collection is the
            perfect way to add sparkle to the season. Wrap your loved ones in the beauty of Owow
            and make every gift unforgettable.
          </p>
          <p className="gifts-description">Discover the perfect gift today.</p>
          <button className="gifts-button">SHOP NOW</button>
        </div>

        {/* Right Image Section */}
        <div className="gifts-image-container">
          <img src={giftImage} alt="Jewelry Gift" className="gifts-image" />
        </div>
      </div>
    </section>
  );
};

export default GiftOfTheSeason;
