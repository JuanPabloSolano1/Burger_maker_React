import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Routes from "./components/Routes/Routes";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

// const store = createStore(reducer);

const App = () => (
  <BrowserRouter forceRefresh={true}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
