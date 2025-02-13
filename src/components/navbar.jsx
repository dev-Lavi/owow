import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/logo/logo.svg";
import SearchIcon from "../assets/icons/search.svg";
import HeartIcon from "../assets/icons/heart.svg";
import CartIcon from "../assets/icons/cart.svg";
import UserIcon from "../assets/icons/user.svg";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        {/* Left Section */}
        <div className="nav-left">
          {/* Hamburger Menu */}
          <img 
            src={MenuIcon} 
            alt="Menu" 
            className="menu-icon" 
            onClick={() => setMenuOpen(true)} 
            tabIndex={0}
          />

          {/* Products Link (Hidden on Small Screens) */}
          <Link to="/products" className="hide-on-small">PRODUCTS</Link>
        </div>

        {/* Center Logo */}
        <div className="nav-center">
          <Link to="/">
            <img src={Logo} alt="WOW Jewellery" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="nav-right">
          <div className="nav-cart">
            <img src={CartIcon} alt="Cart" />
          </div>
          <img src={UserIcon} alt="User" />
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <img 
          src={CloseIcon} 
          alt="Close" 
          className="close-icon" 
          onClick={() => setMenuOpen(false)} 
          tabIndex={0}
        />

        {/* Menu Links */}
        <Link to="/about-us" className="sidebar-link">ABOUT US</Link>

        {/* Search & Wishlist Icons */}
        <div className="sidebar-icons">
          <img src={SearchIcon} alt="Search" className="sidebar-icon" />
          <img src={HeartIcon} alt="Wishlist" className="sidebar-icon" />
        </div>
      </div>

      {/* Overlay to Close Sidebar on Click Outside */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
