import React from "react";
import Burger from "../Burger/Burger";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import * as actionTypes from "../../store/actions";
import "./Checkout.css";

const Checkout = (props) => {
  let history = useHistory();
  const cancelOrder = () => {
    history.push("/");
  };

  const continueOrder = () => {
    console.log("Hello");
    history.push("/checkout/contact-data");
  };
  const { ingredients, onCloseModal, purchased } = props;
  return (
    <div>
      <h1 className="checkout-title">Just get this amazing Burger!</h1>
      <Burger ingredients={ingredients} />
      <div className="checkout-buttons">
        <Button
          className="cancel-button"
          onClick={() => {
            cancelOrder();
            onCloseModal(!purchased);
          }}
        >
          Cancel
        </Button>
        <Button className="continue-button" onClick={() => continueOrder()}>
          Continue
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    purchased: state.purchased
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseModal: (status) =>
      dispatch({
        type: actionTypes.PURCHASED_STATUS,
        purchase: status
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
