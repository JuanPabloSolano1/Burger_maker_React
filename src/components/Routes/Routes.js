import React from "react";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import { Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Checkout from "../Checkout/Checkout";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exacat path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}
export default Routes;
