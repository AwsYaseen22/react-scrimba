import React from "react";

import "./Footer.css";

import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={github} />
    </div>
  );
}