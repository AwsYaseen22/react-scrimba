import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

const container = document.getElementById("root");
const root = createRoot(container);
let App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

root.render(<App />);
