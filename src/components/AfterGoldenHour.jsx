import "../styles/afterGoldenHour.css";
import GoldenHourImg from "../assets/images/section1.svg"; // Update path as needed

const AfterGoldenHour = () => {
  return (
    <section className="golden-hour-section">
      <div className="golden-hour-container">
        <img src={GoldenHourImg} alt="Golden Hour Jewelry" className="golden-hour-image" />
        <div className="golden-hour-content">
          <p className="article-date">ARTICLE • OCTOBER 2022</p>
          <h2 className="golden-hour-title">During the golden hour.</h2>
          <p className="golden-hour-description">
            As the sun sets, casting its golden glow, our jewelry comes alive—radiating warmth, elegance, and timeless beauty. 
            Each piece at Owow is designed to capture the brilliance of this fleeting moment, where light meets luxury in perfect harmony.
          </p>
          <p className="golden-hour-description">
            Whether it’s a dazzling ring catching the last rays of sunlight or an exquisite necklace reflecting the soft evening hues, 
            our collection is crafted to make every moment shine. Let your jewelry tell a story—one of grace, sophistication, and unforgettable charm.
          </p>
          <p className="golden-hour-description">
            Indulge in the magic of the golden hour with Owow.
          </p>
          <button className="golden-hour-button">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default AfterGoldenHour;
