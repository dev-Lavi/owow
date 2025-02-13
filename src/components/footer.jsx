import Logo from "../assets/logo/logo.svg";
import FacebookIcon from "../assets/logo/facebook.svg";
import InstagramIcon from "../assets/logo/instagram.svg";
import TwitterIcon from "../assets/logo/twitter.svg";
import YoutubeIcon from "../assets/logo/youtube.svg";
import LinkedinIcon from "../assets/logo/linkedin.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}
        <div className="footer-sections">
          {/* Customer Services */}
          <div className="footer-column">
            <h3>CUSTOMER SERVICES</h3>
            <a href="#">Contact Us</a>
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Schedule an Appointment</a>
          </div>

          {/* About Us */}
          <div className="footer-column">
            <h3>ABOUT US</h3>
            <a href="#">Origins</a>
            <a href="#">Our Purpose</a>
            <a href="#">Careers</a>
            <a href="#">Sustainability</a>
            <a href="#">Giving Back</a>
          </div>

          {/* Material Care */}
          <div className="footer-column">
            <h3>MATERIAL CARE</h3>
            <a href="#">Jewelry Repair</a>
            <a href="#">Ring Sizing</a>
            <a href="#">Metal Allergy Resources</a>
            <a href="#">Styling Tips</a>
          </div>

          {/* Main Locations */}
          <div className="footer-column">
            <h3>MAIN LOCATIONS</h3>
            <p>Agra Foundry Nagar</p>
            <p>Uttar Pradesh, 282006</p>
            <p>INDIA</p>
          </div>
        </div>

        {/* Right Section: Logo + Social Media */}
        <div className="footer-right">
          <img src={Logo} alt="Owow Jewellery" className="footer-logo" />
          <div className="footer-social-icons">
            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={YoutubeIcon} alt="YouTube" /></a>
            <a href="#"><img src={LinkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <p>© OWOW, LLC</p>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">TERMS OF USE</a>
        <a href="#">SITEMAP</a>
        <a href="#">DO NOT SELL MY INFORMATION</a>
        <a href="#">COOKIES</a>
      </div>

      {/* Bottom Line */}
      <div className="footer-line"></div>
    </footer>
  );
};

export default Footer;
