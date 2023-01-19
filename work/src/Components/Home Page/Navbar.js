import React from 'react'
import logo from "./images/camera 1.png";
export default function Navbar(props) {
 return (
    <div className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="Logo" />
    </div>
    <div className="navbar-right">
      <div className="navbar-item">{props.Button1}</div>
      <div className="navbar-item">{props.Button2}</div>
      <div className="navbar-item">{props.Button3}</div>
      <div className="navbar-item">{props.Button4}</div>
    </div>
  </div>
  )
}
