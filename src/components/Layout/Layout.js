import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout_c.css";
const layout = props => {
  return (
    <Aux>
      <div>Components</div>
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default layout;
