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
  }

  render() {
    const {
      totalPrice,
      ingredients,
      onPurchase,
      purchased,
      total_items,
      onIncrementIngredient,
      onDecreaseIngredient,
      onEraseObjects
    } = this.props;
    const { price } = this.state;
    return (
      <Aux>
        <Modal
          show={purchased}
          ingredients={ingredients}
          price={totalPrice}
          closeModal={() => onPurchase(!purchased)}
          closeButton={() => onPurchase(!purchased)}
        />
        <Burger ingredients={ingredients} />
        <div className="container">
          <div className="burger_price">
            <p className="order_title">Order Status</p>
            <Getprice total={total_items} price={totalPrice} />
            <EraseButton
              className="clear_button"
              click={() => {
                onEraseObjects();
              }}
              total_ingredients={total_items}
              purchased={() => onPurchase(!purchased)}
            />
          </div>
          <div className="Burger_buttons">
            {Object.keys(ingredients).map((ingredientName, index) => {
              return (
                <BurgerButtons
                  keys={index}
                  increaseIngredients={() => {
                    onIncrementIngredient(ingredientName, price);
                  }}
                  decreaseIngredients={() => {
                    onDecreaseIngredient(ingredientName, price);
                  }}
                  item={ingredientName}
                  ing={ingredientName}
                  ingredients={ingredients}
                />
              );
            })}
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
