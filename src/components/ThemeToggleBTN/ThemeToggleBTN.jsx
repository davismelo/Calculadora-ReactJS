import React, { useState } from "react";
import "./ThemeToggleBTN.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const ThemeToggleBTN = ({ SetTheme }) => {
  const [isChecked, SetCheck] = useState(false);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      SetCheck(true);
      SetTheme(true);
    } else {
      SetCheck(false);
      SetTheme(false);
    }
  };

  return (
    <div className="ThemeToggleBTN-container" onClick={handleThemeChange}>
      <input type="checkbox" name="ThemeToggleBTN" id="ThemeToggleBTN" />
      <label htmlFor="ThemeToggleBTN"></label>
      <div className="theme-icon-container">
        <Brightness2Icon style={{ opacity: isChecked ? 1 : 0 }} />
        <WbSunnyIcon style={{ opacity: isChecked ? 0 : 1 }} />
      </div>
    </div>
  );
};

export default ThemeToggleBTN;
