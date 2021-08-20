import { Button } from "@material-ui/core";
import React from "react";
import "./Buttons.css";

const Buttons = () => {
  let btnArr = [];
  let index = 0;
  while (index < 10) {
    btnArr.push(index);
    console.log(btnArr);
    index++;
  }

  const newBtnArr = btnArr.map((element) => {
    return <Button>{element}</Button>;
  });

  return <>{newBtnArr}</>;
};

export default Buttons;
