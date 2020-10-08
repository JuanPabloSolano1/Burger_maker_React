import React from "react";
import Burger from "../Burger/Burger";
import { connect } from "react-redux";
import "./Checkout.css";

const Checkout = (props) => {
  return (
    <div>
      <h1 className="checkout-title">Just get this amazing Burger!</h1>
      <Burger ingredients={props.ingredients} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
