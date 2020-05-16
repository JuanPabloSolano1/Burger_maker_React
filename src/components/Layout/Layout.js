import React from "react";
import Aux from "../../hoc/Aux";
import { ToolBox } from "../../UI/Toolbar/Toolbar";
import { useState } from "react";
import "./Layout_c.css";
import { SideDrawer } from "../../UI/SideDrawer/SideDrawer";
const layout = props => {
  const [newSide, getSide] = useState(false);
  const handleClick = () => {
    getSide(!newSide);
  };
  return (
    <Aux>
      <ToolBox click={handleClick} />
      <SideDrawer newSide={newSide} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default layout;
