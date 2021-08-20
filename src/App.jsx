import React from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Display from "./components/Display/Display";

function App() {
  return (
    <div className="calculator-container">
      <div className="top-container">
        <Display />
      </div>
      <div className="bottom-container">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
