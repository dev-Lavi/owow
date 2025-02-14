import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/products.css";

import p1 from "../assets/products/p1.svg";
import p2 from "../assets/products/p2.svg";
import p3 from "../assets/products/p3.svg";
import p4 from "../assets/products/p4.svg";
import p5 from "../assets/products/p5.svg";
import p6 from "../assets/products/p6.svg";
import p7 from "../assets/products/p7.svg";
import p8 from "../assets/products/p8.svg";
import p9 from "../assets/products/p9.svg";
import p10 from "../assets/products/p10.svg";
import p11 from "../assets/products/p11.svg";

const productData = [
  { img: p1, name: "Necklaces", desc: "Elegant designs crafted with precision." },
  { img: p2, name: "Rings", desc: "Timeless pieces for every occasion." },
  { img: p3, name: "Earrings", desc: "Beautifully crafted to perfection." },
  { img: p4, name: "Bracelets", desc: "Chic and stylish adornments." },
  { img: p5, name: "Anklets", desc: "Delicate designs for every step." },
  { img: p6, name: "Brooches", desc: "Classic pieces with a modern touch." },
  { img: p7, name: "Bangles", desc: "Elegant and traditional styles." },
  { img: p8, name: "Hair Accessories", desc: "Graceful designs for all occasions." },
  { img: p9, name: "Toe Rings", desc: "Minimalist designs for a chic look." },
  { img: p10, name: "Cufflinks", desc: "Sleek and polished luxury pieces." },
  { img: p11, name: "Pendants", desc: "Intricate designs that shine." },
];

const Products = () => {
  return (
    <>
      <div className="products-container">
        <h1 className="products-title">Our Collection</h1>
        <div className="products-grid">
          {productData.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <button className="shop-button">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
