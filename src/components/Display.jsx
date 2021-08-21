import React from "react";
import ThemeToggleBTN from "./ThemeToggleBTN/ThemeToggleBTN";

const Display = ({ NumberShown, SetTheme }) => {
  return (
    <div className="display-container">
      <ThemeToggleBTN SetTheme={SetTheme} />
      <div className="data-display">
        <p>{NumberShown !== "" ? NumberShown : 0}</p>
      </div>
    </div>
  );
};

export default Display;
