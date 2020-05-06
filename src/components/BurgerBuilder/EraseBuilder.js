import React from "react";
import Button from "@material-ui/core/Button";
import "./BurgerBuilder.css";

export const EraseButton = props => {
  return (
    <React.Fragment>
      <div className="order_buttons">
        <Button className="submit_order" onClick={props.click}>
          Submit Order
        </Button>
        <Button onClick={props.click}>Clear Items</Button>
      </div>
    </React.Fragment>
  );
};
