import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import SideBtn from "./components/SideBtn";

function App() {
  const [NumberShown, SetNumberShown] = useState("");
  const [Theme, SetTheme] = useState(false);

  const handleNumber = (el) => {
    let value = el.target.value;
    let arrData = NumberShown[NumberShown.length - 1];
    if (value >= 0) {
      SetNumberShown(NumberShown + "" + value);
    }
    if (
      arrData !== "-" &&
      arrData !== "+" &&
      arrData !== "/" &&
      arrData !== "*" &&
      arrData !== "%" &&
      arrData !== "."
    ) {
      SetNumberShown(NumberShown + "" + value);
    }
    if (value === "=") {
      SetNumberShown(eval(NumberShown));
    }
    if (value === "AC") {
      SetNumberShown("");
    }
    if (value === "C") {
      let StringN = NumberShown + "";
      SetNumberShown(StringN.slice(0, -1));
    }
  };

  function handleThemeChange(e) {
    if (e.target.checked) {
      SetTheme(true);
    } else {
      SetTheme(false);
    }
  }

  return (
    <div
      className="calculator-container"
      id={Theme ? "dark-mode" : "white-mode"}
    >
      <div className="top-container">
        <Display
          handleThemeChange={handleThemeChange}
          Theme={Theme}
          NumberShown={NumberShown}
        />
      </div>
      <div className="bottom-container">
        <div className="keypad-container">
          <Buttons handleNumber={handleNumber} />
        </div>
        <div className="operations-container">
          <SideBtn handleNumber={handleNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
