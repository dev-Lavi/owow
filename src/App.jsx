import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Import Home Page Components
import HeroSection from "./components/HeroSection";
import Categories from "./components/categories";
import AfterGoldenHour from "./components/AfterGoldenHour";
import GiftOfTheSeason from "./components/GiftOfTheSeason";
import WhatWeAreMadeFor from "./components/WhatWeAreMadeFor";

// Import Pages
import AboutUs from "./pages/aboutus"; // Ensure correct filename casing
import Products from "./pages/products"; // Import Products Page

function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <AfterGoldenHour />
      <GiftOfTheSeason />
      <WhatWeAreMadeFor />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays at the top on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} /> {/* Added Products Route */}
      </Routes>
      <Footer /> {/* Footer stays at the bottom on all pages */}
    </Router>
  );
}

export default App;
