import React from "react";
import "./BurgerBuilder.css";
import Aux from "../../hoc/Aux";
import Burger from "../Burger/Burger";
import Getprice from "./BurgerInformation";
import { EraseButton } from "./EraseBuilder";
import { BurgerButtons } from "./BurgerButtons";
import { Modal } from "../../UI/Modal/Modal";
import axios from "../../axios_order";
import { Loader } from "./../../UI/Loader/Loader";
import { TextareaAutosize } from "@material-ui/core";
class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: {
        cheese: 0,
        meat: 0,
        bacon: 0,
        salad: 0
      },
      price: {
        cheese: 1.0,
        meat: 2.3,
        bacon: 3.2,
        salad: 1.5
      },
      total_items: 0,
      total_price: 0,
      purchased: false,
      sidedrawer: false,
      spinner: false
    };
    this.getAddition = this.getAddition.bind(this);
    this.getSubstraction = this.getSubstraction.bind(this);
    this.eraseItems = this.eraseItems.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }
  getAddition(ingre) {
    this.setState(prevState => ({
      quantity: {
        ...prevState.quantity,
        [ingre]: prevState.quantity[ingre] + 1
      },
      total_items:
        Object.values(prevState.quantity).reduce((a, b) => a + b) + 1,
      total_price: prevState.total_price + 1 * prevState.price[ingre]
    }));
  }

  getSubstraction(ingre) {
    if (this.state.quantity[ingre] <= 0) {
      return;
    }
    this.setState(prevState => ({
      quantity: {
        ...prevState.quantity,
        [ingre]: prevState.quantity[ingre] - 1
      },
      total_items:
        Object.values(prevState.quantity).reduce((a, b) => a + b) - 1,
      total_price: prevState.total_price - 1 * prevState.price[ingre]
    }));
  }

  eraseItems() {
    Object.keys(this.state.quantity).forEach(ingredient => {
      this.setState(prevState => ({
        quantity: {
          ...prevState.quantity,
          [ingredient]: 0
        },
        total_items: 0,
        total_price: 0
      }));
    });
  }
  purchaseHandler() {
    this.setState({
      purchased: true
    });
  }

  modalHandler() {
    this.setState({
      purchased: false
    });
  }

  sendRequest() {
    this.setState({
      spinner: true
    });
    const post = {
      quantity: this.state.quantity,
      total_items: this.state.total_items,
      price: this.state.total_price,
      user: {
        name: "Juan Pablo Solano",
        address: "677 osdorper Ban 677"
      },
      payment: {
        credit_card: true
      }
    };
    axios
      .post("/item.json", post)
      .then(response => {
        console.log(response);
        this.setState({
          spinner: false,
          purchased: false
        });
        alert("Order Submited");
        window.location.reload(true);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          spinner: false,
          purchased: false
        });
      });
  }

  render() {
    const {
      purchased,
      quantity,
      total_price,
      total_items,
      spinner
    } = this.state;
    let loader = null;
    if (spinner) {
      loader = <Loader />;
    } else {
      loader = (
        <Modal
          show={purchased}
          ingredients={quantity}
          price={total_price}
          closeModal={this.modalHandler}
          closeButton={this.modalHandler}
          sendRequest={this.sendRequest}
        />
      );
    }
    return (
      <Aux>
        <Burger ingredients={this.state.quantity} />
        {loader}
        <div className="container">
          <div className="burger_price">
            <p className="order_title">Order Status</p>
            <Getprice total={total_items} price={total_price} />
            <EraseButton
              className="clear_button"
              click={this.eraseItems}
              total_ingredients={total_items}
              purchased={this.purchaseHandler}
            />
          </div>
          <div className="Burger_buttons">
            {Object.keys(quantity).map((element, index) => {
              return (
                <BurgerButtons
                  increaseIngredients={this.getAddition}
                  decreaseIngredients={this.getSubstraction}
                  keys={index}
                  item={element}
                  ing={element}
                />
              );
            })}
          </div>
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
