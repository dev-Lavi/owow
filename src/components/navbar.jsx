import React from "react";  
import "../styles/navbar.css";
import Logo from "../assets/logo/logo.svg";
import LocationIcon from "../assets/icons/location.svg";
import SearchIcon from "../assets/icons/search.svg";
import HeartIcon from "../assets/icons/heart.svg";
import CartIcon from "../assets/icons/cart.svg";    
import UserIcon from "../assets/icons/user.svg";

const Navbar = () => {
  return (
    <nav className="nav">
  {/* Left Section */}
  <div className="nav-left">
    <img src={LocationIcon} alt="Location" />
    <a href="#">ABOUT US</a>
    <a href="#">PRODUCTS</a>
  </div>

  {/* Center Logo */}
  <div className="nav-center">
    <img src={Logo} alt="WOW Jewellery" />
  </div>

  {/* Right Section */}
  <div className="nav-right">
    <img src={SearchIcon} alt="Search" />
    <img src={HeartIcon} alt="Wishlist" />
    
    {/* Cart Icon */}
    <div className="nav-cart">
      <img src={CartIcon} alt="Cart" />
    </div>

    <img src={UserIcon} alt="User" />
  </div>
</nav>
  );
};

export default Navbar;