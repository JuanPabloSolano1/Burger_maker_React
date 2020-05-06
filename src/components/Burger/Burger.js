import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
const burger = props => {
  const getIngredients = Object.keys(props.ingredients).map((ingredient, i) => {
    return [...Array(props.ingredients[ingredient])].map((_, i) => {
      return <BurgerIngredient index={i} type={ingredient} />;
    });
  });
  return (
    <div className="banner">
      <div className="Burger">
        <BurgerIngredient type="breadtop" />
        {getIngredients}
        <BurgerIngredient type="breadbottom" />
      </div>
    </div>
  );
};

export default burger;
