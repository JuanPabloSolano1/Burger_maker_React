import React from "react";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import { withRouter } from "react-router";
import ContactData from "../Checkout/ContactData";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";

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
            <Route exact path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default withRouter(Routes);
