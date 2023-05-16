import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { getCurrencyCode, updateCurrencyData } from "./store/rates.js";

store.dispatch((dispatch, getState) => {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(updateCurrencyData(currencyCode));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
