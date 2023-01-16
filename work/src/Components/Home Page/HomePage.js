import React from "react";
import "./HomePage.css";
import logo from "./images/Logo.png";
import Rectangle2 from "./images/Rectangle 2.png";
import Bank from "./images/Rectangle 50.png";
import Finance from "./images/Rectangle 51.png";
import Calculator from "./images/Rectangle 52.png";
import Discuss from "./images/Discuss.png";
export default function HomePage() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <div className="navbar-label">
            BUYERS
          </div>
          <div className="navbar-label">
            SUPPLIERS
          </div>
          <div className="navbar-label">
            PRODUCTS
          </div>
          <div className="navbar-label">
            ABOUT US
          </div>
        </div>
      </div>
      <div className="get-started">
        <div className="bg-image">
        <img src={Rectangle2} alt="Logo" className="main-image" />
          <div className="overlay">
          </div>
            <div className="gs-content">
            <button className="btn" >Get Started</button>
            </div>
        </div>
      </div>
      <div className="section"></div>
      {/* <div className="services">
        <h1 className="service-heading">Our Services</h1>
        <div className="services-container">
          <div className="service">
            <img src={Bank} alt="Service 1" />
            <br />
            <label className="service-label">Service 1</label>
          </div>
          <div className="service">
            <img src={Finance} alt="Service 2" />
            <br />
            <label className="service-label-c">Sector-3 Noida</label>
            <br />
            <label className="service-label">Service 2</label>
          </div>
          <div className="service">
            <img src={Calculator} alt="Service 3" />
            <br />
            <label className="service-label">Service 3</label>
          </div>
        </div>
      </div> */}
      {/* <div className="our-clients-say">
        <h1 className="client-head">Our Clients Say</h1>
        <div className="client-container">
          <img src={Discuss} alt="Client" className="client-img" />
          <div className="client-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, ipsum quis blandit congue, ipsum risus congue augue, eget
              tincidunt velit velit vel velit. Sed vel velit velit.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="footer">
        <footer>
          <div
            className="footer-section"
            style={{ flex: "1.5", backgroundColor: "#D2153D" }}
          >
            <h3>Section 1</h3>
          </div>
          <div
            className="footer-section"
            style={{ flex: "1", backgroundColor: "#00215B" }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>About Company</li>
              <li>Our Services</li>
              <li>Contacts</li>
              <li></li>
            </ul>
          </div>
          <div
            className="footer-section"
            style={{ flex: "1", backgroundColor: "#00215B" }}
          >
            <h3>Client Support</h3>
            <ul>
              <li>Careers</li>
              <li>Our Process</li>
              <li>FAQs</li>
              <li>Client Testimonials</li>
            </ul>
          </div>
          <div
            className="footer-section"
            style={{ flex: "1", backgroundColor: "#00215B" }}
          >
            <h3>Contact</h3>
            <ul>
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </footer>
      </div> */}
    </div>
  );
}
