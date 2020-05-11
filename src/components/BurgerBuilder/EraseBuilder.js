import React from "react";
import Button from "@material-ui/core/Button";
import "./BurgerBuilder.css";

export const EraseButton = props => {
  let button = null;
  props.total_ingredients <= 0
    ? (button = (
        <Button className="submit_order" onClick={props.click} disabled>
          Submit Order
        </Button>
      ))
    : (button = (
        <Button className="submit_order" onClick={props.click}>
          Submit Order
        </Button>
      ));
  return (
    <React.Fragment>
      <div className="order_buttons">
        {button}
        <Button onClick={props.click}>Clear Items</Button>
      </div>
    </React.Fragment>
  );
};
