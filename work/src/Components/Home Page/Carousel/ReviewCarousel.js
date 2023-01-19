import React, { useState } from "react";
import DotContainer from "./DotContainer.js";
import Mycard from "./MyCard.js";
import "./ReviewCarousel.css";

export default function ReviewCarousel()  {
  const SliderData = [
    {
      review:
        "Suspendisse tortor enim, varius et porttitor sit amet posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi",
      name: "Katy Grey",
    },
    {
      review:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam auctor, tellus at malesuada malesuada, leo velit tincidunt velit, at tincidunt velit nulla id velit. Proin eget metus euismod, tincidunt eros id, tincidunt velit.",
      name: "John Doe",
    },
    {
      review:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tincidunt, nibh vitae convallis convallis, diam augue aliquet justo, vel accumsan ligula quam vel velit. Fusce vel dolor id est congue malesuada.",
      name: "Robert Anderson",
    },
  ];
  const length = SliderData.length;
  const [counter, setCounter] = useState(0);
  const btnpressprev = () => {
    setCounter(counter === 0 ? length - 1 : counter - 1);
  };
  console.log(counter);
  const btnpressnext = () => {
    setCounter(counter === length - 1 ? 0 : counter + 1);
  };

  return (
    <div className="carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>⮜</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>⮞</p>
      </button>
      <div className="container">
        {SliderData.map((data, index) => {
          return (
            <div className={index === counter ? "slide-active" : "slide"}>
              {index === counter ? (
                <Mycard
                  review={data.review}
                  name={data.name}
                  key={Math.floor(Math.random() * 10) + 1}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <DotContainer counter={counter} />
    </div>
  );
};

