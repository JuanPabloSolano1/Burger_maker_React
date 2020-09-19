import React from "react";
import { render } from "react-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

const App = () => (
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Provider>
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
