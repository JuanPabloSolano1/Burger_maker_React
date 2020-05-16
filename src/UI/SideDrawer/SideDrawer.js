import React from "react";
import "./SideDrawer.css";
export const SideDrawer = props => {
  return (
    <React.Fragment>
      <div
        className="drawer"
        style={{
          transform: props.newSide ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <div className="open">
          <p>Paragraph</p>
          <button onClick={props.click}>Close</button>
        </div>
      </div>
    </React.Fragment>
  );
};
