import React from "react";
import "./HomePage.css";
import logo from "./images/camera 1.png";
import Rectangle2 from "./images/Rectangle 2.png";
import Bank from "./images/Rectangle 50.png";
import Finance from "./images/Rectangle 51.png";
import Calculator from "./images/Rectangle 52.png";
import Discuss from "./images/Discuss.png";
import Arrow from "./images/Vector.png";
import Section from "./images/Section.png";
import sector from "./images/Sector-3 Noida.png";
import quote from "./images/quote-right.png";

export default function HomePage() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-right">
          <div className="navbar-item">BUYERS</div>
          <div className="navbar-item">SUPPLIERS</div>
          <div className="navbar-item">PRODUCTS</div>
          <div className="navbar-item">ABOUT US</div>
        </div>
      </div>
      <div className="get-started">
        <div className="bg-image">
          <img src={Rectangle2} alt="Logo" className="main-image" />
          <div className="overlay"></div>
          <div className="getStarted-content">
            <div className="getStarted-1">TECH ENABLED B2B PLATFORM</div>
            <div className="getStarted-2">
              Transform vendor and supply chain management digitally.
            </div>
            <div className="getStarted-3">
              <div className="getStarted-label">Your email address</div>
              <button className="btn">
                GET STARTED <img src={Arrow} alt="arrow" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <img
          src={Section}
          alt="section"
          style={{ width: "100%", bottom: "101px", position: "relative" }}
        />
      </div>

      <div
        className="services"
        style={{ position: "relative", bottom: "114px" }}
      >
        <h1 className="service-heading">Our Services</h1>
        <div className="services-container">
          <div className="service" style={{ marginLeft: "75px" }}>
            <img src={Bank} alt="Service 1" />
            <br />
            <label className="service-label">Loan Provider</label>
          </div>
          <div className="service" style={{ marginLeft: "72px" }}>
            <img src={Finance} alt="Service 2" />
            <br />
            <img src={sector} alt="Sector-3 Noida" className="sector3" />
            <br />
            <label
              className="service-label"
              style={{ position: "relative", bottom: "28px" }}
            >
              Purchase Financing
            </label>
          </div>
          <div className="service" style={{ marginRight: "23px" }}>
            <img src={Calculator} alt="Service 3"  style={{width:'196px',position:'relative',bottom:'17px'}}/>
            <br />
            <label
              className="service-label "
              style={{ position: "relative", bottom: "30px" }}
            >
              Sales Bill Discounting
            </label>
          </div>
        </div>
      </div>
      <div className="our-clients-say">
        <h1 className="client-head">Our Clients Say</h1>
        <div className="client-container">
          <img src={Discuss} alt="Client" className="client-img" />
          <div className="client-text">
            <div className="client-quote"><img src={quote} alt='"' /></div>
            <p>
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique
            </p>
            <h3 style={{color: 'rgba(22, 33, 62, 1)'}}>Katy Grey</h3>
          </div>
        </div>
      </div>
      <div className="footer">
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
      </div>
    </div>
  );
}
