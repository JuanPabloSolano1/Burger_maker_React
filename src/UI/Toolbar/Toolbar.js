import React from "react";
import "./Toolbar.css";
import { Link } from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
export const ToolBox = (props) => {
  return (
    <div className="Toolbar">
      <button className="button" onClick={props.click}>
        <FastfoodIcon className="icon" />
        Menu
      </button>
      <Link to="/orders">Orders</Link>
    </div>
  );
};
