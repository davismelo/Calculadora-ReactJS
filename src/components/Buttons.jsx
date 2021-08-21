import { Button } from "@material-ui/core";
import React from "react";

const Buttons = ({ handleNumber }) => {
  let btnArr = ["AC", "C", "%"];
  let index = 0;
  while (index < 10) {
    btnArr.push(index);
    index++;
  }
  btnArr.push(".");

  const newBtnArr = btnArr.map((element) => {
    return (
      <Button value={element} onClick={handleNumber} key={element}>
        {element}
      </Button>
    );
  });

  return <>{newBtnArr}</>;
};

export default Buttons;
