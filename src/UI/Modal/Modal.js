import React from "react";
import "./Modal.css";

export const Modal = props => {
  const ingredients = Object.keys(props.ingredients).map((element, index) => {
    if (props.ingredients[element] > 0) {
      return (
        <li keys={index}>
          <span className="span">
            {element[0].toUpperCase() + element.slice(1, element.length)}:
          </span>
          <span>{props.ingredients[element]}</span>
        </li>
      );
    }
  });
  return (
    <React.Fragment>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
        className="Modal"
      >
        <div className="Modal_text">
          <h1>Order Summary</h1>
          <ul className="Modal_Information">{ingredients}</ul>
          <p className="Modal_Information">
            Total Price: €{props.price.toFixed(2)}
          </p>
          <h4>Complete Check Out</h4>
        </div>
      </div>
    </React.Fragment>
  );
};
