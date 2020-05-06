import React from "react";
import "./BurgerBuilder.css";
import Aux from "../../hoc/Aux";
import Burger from "../Burger/Burger";
import Getprice from "./BurgerInformation";
import { EraseButton } from "./EraseBuilder";
import { BurgerButtons } from "./BurgerButtons";

// Clear out order
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
      total_price: 0
    };
    this.getAddition = this.getAddition.bind(this);
    this.getSubstraction = this.getSubstraction.bind(this);
    this.eraseItems = this.eraseItems.bind(this);
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
    console.log(this.state.quantity);
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.quantity} />
        <div className="container">
          <div className="burger_price">
            <p className="order_title">Order Status</p>
            <Getprice
              total={this.state.total_items}
              price={this.state.total_price}
            />
            <EraseButton className="clear_button" click={this.eraseItems} />
          </div>
          <div className="Burger_buttons">
            {Object.keys(this.state.quantity).map((element, index) => {
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
