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
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
