import React from "react";

import logo from "./images/logo512.png";
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} className="nav--icon" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
