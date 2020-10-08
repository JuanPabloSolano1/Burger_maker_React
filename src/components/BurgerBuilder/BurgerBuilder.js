import React from "react";
import "./BurgerBuilder.css";
import Aux from "../../hoc/Aux";
import Burger from "../Burger/Burger";
import Getprice from "./BurgerInformation";
import { EraseButton } from "./EraseBuilder";
import { BurgerButtons } from "./BurgerButtons";
import { Modal } from "../../UI/Modal/Modal";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {
        cheese: 1.0,
        meat: 2.3,
        bacon: 3.2,
        salad: 1.5
      }
    };
    // this.getAddition = this.getAddition.bind(this);
    // this.getSubstraction = this.getSubstraction.bind(this);
    this.eraseItems = this.eraseItems.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
  }
  getAddition(ingre) {
    this.setState((prevState) => ({
      total_items:
        Object.values(this.props.ingredients).reduce((a, b) => a + b) + 1
    }));
  }

  getSubstraction(ingre) {
    if (this.props.ingredients[ingre] <= 0) {
      return;
    }
    this.setState((prevState) => ({
      total_items:
        Object.values(this.props.ingredients).reduce((a, b) => a + b) - 1
    }));
  }

  eraseItems() {
    this.setState({
      total_items: 0
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

  render() {
    const { totalPrice, ingredients } = this.props;
    return (
      <Aux>
        <Modal
          show={this.props.purchased}
          ingredients={ingredients}
          price={totalPrice}
          closeModal={() => this.props.onPurchase(!this.props.purchased)}
          closeButton={() => this.props.onPurchase(!this.props.purchased)}
        />
        <Burger ingredients={this.props.ingredients} />
        <div className="container">
          <div className="burger_price">
            <p className="order_title">Order Status</p>
            <Getprice total={this.props.total_items} price={totalPrice} />
            <EraseButton
              className="clear_button"
              click={() => {
                this.eraseItems();
                this.props.onEraseObjects();
              }}
              total_ingredients={this.props.total_items}
              purchased={() => this.props.onPurchase(!this.props.purchased)}
            />
          </div>
          <div className="Burger_buttons">
            {Object.keys(this.props.ingredients).map(
              (ingredientName, index) => {
                return (
                  <BurgerButtons
                    keys={index}
                    increaseIngredients={() => {
                      this.props.onIncrementIngredient(
                        ingredientName,
                        this.state.price
                      );
                      this.getAddition(ingredientName);
                    }}
                    decreaseIngredients={() => {
                      this.props.onDecreaseIngredient(
                        ingredientName,
                        this.state.price
                      );
                      this.getSubstraction(ingredientName);
                    }}
                    item={ingredientName}
                    ing={ingredientName}
                    ingredients={this.props.ingredients}
                  />
                );
              }
            )}
          </div>
        </div>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    totalOrder: state.total_items,
    purchased: state.purchased
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementIngredient: (ingredientName, price) =>
      dispatch({
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: ingredientName,
        price: price[ingredientName],
        item: 1
      }),
    onPurchase: (status) =>
      dispatch({
        type: actionTypes.PURCHASED_STATUS,
        purchase: status
      }),
    onDecreaseIngredient: (ingredientName, price) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: ingredientName,
        price: price[ingredientName],
        item: 1
      }),
    onEraseObjects: () =>
      dispatch({
        type: actionTypes.CLEAR_INGREDIENTS,
        ingredients: { salad: 0, bacon: 0, meat: 0, cheese: 0 }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
