import React from "react";
import "./Toolbar.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
export const ToolBox = props => {
  return (
    <div className="Toolbar">
      <button className="button" onClick={props.click}>
        <FastfoodIcon className="icon" />
        Menu
      </button>
    </div>
  );
};
