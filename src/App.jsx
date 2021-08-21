import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import SideBtn from "./components/SideBtn";

function App() {
  const [NumberShown, SetNumberShown] = useState("");
  const [Theme, SetTheme] = useState(false);

  const handleNumber = (el) => {
    let firstValue = NumberShown;
    let value = el.target.value;
    if (value !== "AC" && value !== "C" && value !== "=") {
      SetNumberShown(firstValue + "" + value);
    } else if (value === "=") {
      let result = eval(NumberShown);
      SetNumberShown(result);
    } else if (value === "AC") {
      SetNumberShown("");
    } else if (value === "C") {
      let StringN = NumberShown + "";
      SetNumberShown(StringN.slice(0, -1));
    }
  };

  return (
    <div
      className="calculator-container"
      id={Theme ? "dark-mode" : "white-mode"}
    >
      <div className="top-container">
        <Display NumberShown={NumberShown} SetTheme={SetTheme} />
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
