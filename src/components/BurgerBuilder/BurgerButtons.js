import React from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export const BurgerButtons = props => {
  return (
    <div className="burger_buttons" keys={props.keys}>
      <p className="label">{props.item}</p>
      <Button
        className="add"
        onClick={() => props.increaseIngredients(props.ing)}
      >
        <AddIcon />
      </Button>
      <Button
        className="remove"
        onClick={() => props.decreaseIngredients(props.ing)}
      >
        <RemoveIcon />
      </Button>
    </div>
  );
};
