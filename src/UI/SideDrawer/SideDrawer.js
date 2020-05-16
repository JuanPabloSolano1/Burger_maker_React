import React from "react";
import "./SideDrawer.css";
import Button from "@material-ui/core/Button";
export const SideDrawer = props => {
  return (
    <React.Fragment>
      <div
        className="drawer"
        style={{
          transform: props.newSide ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <div className="open">
          <h4 className="side-Title">The Cheese Maniac</h4>
          <img
            className="burger-images"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1589644379/amirali-mirhashemian-sc5sTPMrVfk-unsplash_ru0mft.jpg"
            alt="First Burger"
          />
          <h4 className="side-Title">The Baconator</h4>
          <img
            className="burger-images"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1589644720/mae-mu-I7A_pHLcQK8-unsplash_comlqj.jpg"
            alt="First Burger"
          />
          <h4 className="side-Title">Fries trip</h4>
          <img
            className="burger-images"
            src="https://res.cloudinary.com/spread-the-love/image/upload/v1589645077/jay-wennington-gm2zwTb0s9c-unsplash_rdye64.jpg"
            alt="First Burger"
          />
          <Button id="Sidedrawer-button" onClick={props.click}>
            Close
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
