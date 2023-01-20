import React from 'react'
import Bank from "./images/Rectangle 50.png";
import Finance from "./images/Rectangle 51.png";
import Calculator from "./images/Rectangle 52.png";
import sector from "./images/Sector-3 Noida.png";

export default function OurServices() {
  return (
    <div
        className="services"
      >
        <h1 className="service-heading">OUR SERVICES</h1>
        <div className="services-container" style={{paddingTop:'100px',paddingLeft:'86px',paddingRight:'56px'}}>
          <div className="service">
            <img src={Bank} alt="Service 1" />
            <br />
            <label className="service-label">Loan Provider</label>
          </div>
          <div className="service" style={{ position:'relative',bottom:'69px' }}>
            <img src={Finance} alt="Service 2" style={{width:'307px'}}/>
            <br />
            <label
              className="service-label"
              style={{ position: "relative", bottom: "72px" }}
            >
              Purchase Financing
            </label>
          </div>
          <div className="service">
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
  )
}
