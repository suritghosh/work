import React from 'react'
import Discuss from "./images/Discuss.png";
import quote from "./images/quote_icon.png";
import dots from './images/dots.png'
import ReviewCarousel from './Carousel/ReviewCarousel';

export default function OurClientSay() {
  return (
    <div className="our-clients-say">
        <h1 className="client-head">Our Clients Say</h1>
        <div className="client-container">
          <img src={Discuss} alt="Client" className="client-img" />
          <div className="client-text">
            <div className="client-quote"><img src={quote} alt='"' /></div>
            {/* <p>
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique
            </p>
            <h3 style={{color: 'rgba(22, 33, 62, 1)'}}>Katy Grey</h3>
            <img src={dots} alt="" /> */}
            <ReviewCarousel/>
          </div>
        </div>
      </div>
  )
}
