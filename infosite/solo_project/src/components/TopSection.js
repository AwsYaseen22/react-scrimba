import React from "react";

import mail from "../images/Mail.png";
import linkedin from "../images/linkedin.png";
import "./TopSection.css";

// {
//   /* <img src={logo} className="App-logo" alt="logo" />; */
// }

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
        <button className="top--buttons-button top--button-email">
          <img src={mail} />
          Email
        </button>
        <button className="top--buttons-button top--button-linkedin">
          <img src={linkedin} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
