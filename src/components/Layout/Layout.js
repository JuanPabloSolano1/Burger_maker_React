import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout_c.css";
import { ToolBox } from "../../UI/Toolbar/Toolbar";
const layout = props => {
  return (
    <Aux>
      <ToolBox />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default layout;
