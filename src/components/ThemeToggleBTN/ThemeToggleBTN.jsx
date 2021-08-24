import React from "react";
import "./ThemeToggleBTN.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const ThemeToggleBTN = ({ handleThemeChange, Theme }) => {
  return (
    <div className="ThemeToggleBTN-container" onClick={handleThemeChange}>
      <input type="checkbox" name="ThemeToggleBTN" id="ThemeToggleBTN" />
      <label htmlFor="ThemeToggleBTN"></label>
      <div className="theme-icon-container">
        <Brightness2Icon style={{ opacity: Theme ? 1 : 0 }} />
        <WbSunnyIcon style={{ opacity: Theme ? 0 : 1 }} />
      </div>
    </div>
  );
};

export default ThemeToggleBTN;
