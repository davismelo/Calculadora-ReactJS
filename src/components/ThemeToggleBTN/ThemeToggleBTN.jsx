import React, { useState } from "react";
import "./ThemeToggleBTN.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const ThemeToggleBTN = () => {
  const [isBlackTheme, setBlackTheme] = useState(false);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setBlackTheme(true);
    } else {
      setBlackTheme(false);
    }
  };

  return (
    <div className="ThemeToggleBTN-container" onClick={handleThemeChange}>
      <input type="checkbox" name="ThemeToggleBTN" id="ThemeToggleBTN" />
      <label htmlFor="ThemeToggleBTN"></label>
      <div className="theme-icon-container">
        <Brightness2Icon
          style={
            isBlackTheme
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
        />{" "}
        <WbSunnyIcon
          style={
            isBlackTheme
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 1,
                }
          }
        />
      </div>
    </div>
  );
};

export default ThemeToggleBTN;
