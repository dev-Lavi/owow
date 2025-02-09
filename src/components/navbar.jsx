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
    <nav className="flex justify-between items-center px-16 py-6 bg-white shadow-md w-full">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <img src={LocationIcon} alt="Location" className="w-6 h-6 opacity-80" />
        <a href="#" className="text-lg font-medium text-gray-900 hover:text-[#C29D5E] transition-all">ABOUT US</a>
        <a href="#" className="text-lg font-medium text-gray-900 hover:text-[#C29D5E] transition-all">PRODUCTS</a>
      </div>

      {/* Center Logo */}
      <div>
      <img src={Logo} alt="WOW Jewellery" className="h-21" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-8">
        <img src={SearchIcon} alt="Search" className="w-6 h-6 opacity-80 hover:opacity-100 transition-all cursor-pointer" />
        <img src={HeartIcon} alt="Wishlist" className="w-6 h-6 opacity-80 hover:opacity-100 transition-all cursor-pointer" />

        {/* Cart Icon with Notification Badge */}
        <div className="relative cursor-pointer">
          <img src={CartIcon} alt="Cart" className="w-6 h-6 opacity-80 hover:opacity-100 transition-all" />
          <span className="absolute -top-2 -right-2 bg-[#C29D5E] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
        </div>

        <img src={UserIcon} alt="User" className="w-6 h-6 opacity-80 hover:opacity-100 transition-all cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
