import React from "react";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import { withRouter } from "react-router";
import ContactData from "../Checkout/ContactData";
import Checkout from "../Checkout/Checkout";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/checkout/contact-data"
              component={ContactData}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default withRouter(Routes);
