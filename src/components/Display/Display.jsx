import React from "react";
import ThemeToggleBTN from "../ThemeToggleBTN/ThemeToggleBTN";
import "./Display.css";

const Display = () => {
  return (
    <div className="display-container">
      <ThemeToggleBTN />
      <div className="data-display">
        <p>15.5555</p>
      </div>
    </div>
  );
};

export default Display;
