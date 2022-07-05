import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [dark, setDark] = React.useState(true);

  function toggleDark() {
    // console.log(dark);
    setDark((prevDark) => !prevDark);
  }
  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={toggleDark} />
      <Main darkMode={dark} />
    </div>
  );
}
