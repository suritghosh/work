import React from "react";
import "./MyCard.css";

export default function MyCard(props) {
  return (
    <div className="client-head">
      <p>{props.review}</p>
      <h3 style={{ color: "rgba(22, 33, 62, 1)" }}>{props.name}</h3>
    </div>
  );
};

