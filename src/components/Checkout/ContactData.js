import React from "react";
import { connect } from "react-redux";
import Burger from "../Burger/Burger";
import { useReducer } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./ContactData.css";

const ContactData = (props) => {
  const [newMessage, setMessage] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    {
      name: "",
      phone: "",
      address: "",
      credit_card: "",
      email: ""
    }
  );
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMessage({ [name]: value });
  };

  const handleSubmit = () => {
    let information = {
      name: newMessage.name,
      phone: newMessage.phone,
      address: newMessage.address,
      credit_card: newMessage.credit_card,
      email: newMessage.email,
      order: {
        ingredients: props.ingredients,
        price: props.total_price,
        total_items: props.total_items
      }
    };
    axios
      .post(`https://burger-3064e.firebaseio.com/item.json`, information)
      .then((response) => {
        console.log(response);
        alert("Your order has been processed");
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Burger ingredients={props.ingredients} />
      <div className="form-container">
        <div>
          <div>
            <label className="form-label">Name</label>
          </div>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            className="form-input"
            name="name"
          />
        </div>
        <div>
          <div>
            <label className="form-label">Email</label>
          </div>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            className="form-input"
            name="email"
          />
        </div>
        <div>
          <div>
            <label className="form-label">Phone</label>
          </div>
          <input
            onChange={(event) => handleChange(event)}
            type="number"
            className="form-input"
            name="phone"
          />
        </div>
        <div>
          <div>
            <label className="form-label">Address</label>
          </div>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            className="form-input"
            name="address"
          />
        </div>
        <div>
          <div>
            <label className="form-label">Credit Card</label>
          </div>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            className="form-input"
            name="credit_card"
          />
        </div>
        <Button
          id="submit-button"
          className="continue-button"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    total_items: state.total_items,
    total_price: state.totalPrice
  };
};

export default connect(mapStateToProps)(ContactData);
