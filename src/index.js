import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

import { Provider } from "react-redux";
import storage from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storage;

const container = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  container
);
