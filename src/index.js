import React from "react";
import { render } from "react-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";

const App = () => (
  <div>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>
);

render(<App />, document.getElementById("root"));
