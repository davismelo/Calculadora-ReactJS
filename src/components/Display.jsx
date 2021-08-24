import React from "react";
import ThemeToggleBTN from "./ThemeToggleBTN/ThemeToggleBTN";

const Display = ({ NumberShown, handleThemeChange, Theme }) => {
  return (
    <div className="display-container">
      <ThemeToggleBTN handleThemeChange={handleThemeChange} Theme={Theme} />
      <div className="data-display">
        <p>{NumberShown === "" ? 0 : NumberShown}</p>
      </div>
    </div>
  );
};

export default Display;
