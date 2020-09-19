import * as actionTypes from "../store/actions";
const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0
  },
  totalPrice: 0,
  total_items: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + action.price,
        total_items: state.total_items + action.item
      };

    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - action.price,
        total_items: state.total_items - action.item
      };
    case actionTypes.CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 0
      };
    default:
      return state;
  }
};
