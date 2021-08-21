import React from "react";
import { Button } from "@material-ui/core";

const SideBtn = ({ handleNumber }) => {
  let sideBtnArr = ["/", "*", "+", "-", "="];

  const newSideBtnArr = sideBtnArr.map((element) => {
    return (
      <Button value={element} onClick={handleNumber} key={element}>
        {element}
      </Button>
    );
  });

  return <>{newSideBtnArr}</>;
};

export default SideBtn;
