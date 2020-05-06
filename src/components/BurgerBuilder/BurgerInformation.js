import React from "react";
import "./BurgerBuilder.css";
const getPrice = props => {
  return (
    <React.Fragment>
      <div className="text">
        <p>
          Number of Items: <strong>{props.total}</strong>
        </p>
        <p>
          Total Price: <strong>€{props.price.toFixed(2)}</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default getPrice;
