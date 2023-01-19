import React from 'react'
import logo from "./images/camera 1.png";
import Facebook from "./images/Facebook.png";
import Twitter from "./images/Twitter.png";
import Youtube from "./images/Youtube.png";
import Linkedin from "./images/Linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
        
    <div className="footer-left">
      <div >
        <img className="logo-container"  src={logo} alt="Logo" />
      </div>
      <div className="details-container">
        <div className="venue">
          <p>Room no.4,A-26, Sec-3</p> <p>Noida, UP.</p> <p>India</p>
        </div>
        <div className="call-info">Call Us Today</div>
        <div className="phone-number">+ 91 212 212 124</div>   
        <div className="social-icons-container">
        <img src={Twitter} alt="Logo" className="social-icons" />
        <img src={Facebook} alt="Logo" className="social-icons" />
        <img src={Linkedin} alt="Logo" className="social-icons" />
        <img src={Youtube} alt="Logo" className="social-icons" />
      </div>
      </div>
   
    </div>
    <div className="footer-right">
      <div className="links-container">
        <div className="title">Quick Links</div>
        <div className="links">
          <ul>
            <li>About Company</li>
            <li>Our Services</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="links-container">
        <div className="title">Clients Support</div>
        <div className="links" style={{position:'relative',right:'25px'}}>
          <ul>
            <li>Careers</li>
            <li>Our Process</li>
            <li>FAQs</li>
            <li>Client Testimonials</li>
          </ul>
        </div>
      </div>
      <div className="links-container" >
        <div className="title">CONTACT</div>
        <div className="links" style={{position:'relative',right:'30px'}}>
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
