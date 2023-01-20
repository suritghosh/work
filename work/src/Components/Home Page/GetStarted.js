import React from 'react'
import Rectangle2 from "./images/Rectangle 2.png";
import Arrow from "./images/Vector.png";

export default function GetStarted() {
  return (
    <div className="get-started">
    <div className="bg-image">
      <img src={Rectangle2} alt="Logo" className="main-image" />
      {/* <div className="overlay"></div> */}
      <div className="getStarted-content">
        <div className="getStarted-1">TECH ENABLED B2B PLATFORM</div>
        <div className="getStarted-2">
          Transform vendor and supply chain management digitally.
        </div>
        <div className="getStarted-3">
          <div className="getStarted-label">Your email address</div>
          <button className="btn">
            GET STARTED <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
