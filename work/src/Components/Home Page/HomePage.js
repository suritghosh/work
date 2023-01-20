import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import GetStarted from "./GetStarted";
import Features from "./Features";
import OurServices from "./OurServices";
import OurClientSay from "./OurClientSay";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <div className="container">
      <Navbar
        Button1="BUYERS"
        Button2="SUPPLIERS"
        Button3="PRODUCTS"
        Button4="ABOUT US"
      />
      <GetStarted />
      <Features />
      <OurServices />
      <OurClientSay />
      <Footer />
    </div>
  );
}
