import React, { useState } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import InputSlider from "./Input";
import { Button } from "@material-ui/core";

function Header(props) {
  
  return (
    <header>
      <h1>
        KnapSack Problem
      </h1>
      <Button style={{backgroundColor : '#2D9596', color : '#fff', fontWeight: 'bold'}} onClick ={props.onSolve}>Run</Button>
      <div className="inputField">
      <InputSlider />
      </div>
    </header>
  );
}

export default Header;
