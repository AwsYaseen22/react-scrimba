import React from "react";

// import logo from "./logo.svg";
import "./TopSection.css";

{
  /* <img src={logo} className="App-logo" alt="logo" />; */
}

export default function TopSection() {
  return (
    <div className="top--main">
      <div className="top--image"></div>
      <div className="top--text">
        <h1 className="top--title">Aws Ahmed</h1>
        <h3 className="top--subtitle">Software Developer</h3>
        <a className="top--link" href="https://awsyaseen.netlify.app/">
          awsyaseen
        </a>
      </div>
      <div className="top--buttons">
        <button className="top--buttons-button top--button-email">Email</button>
        <button className="top--buttons-button top--button-linkedin">
          LinkedIn
        </button>
      </div>
    </div>
  );
}
