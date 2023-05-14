import { createStore } from "redux";

const initialState = {
  amount: 0,
  currencyCode: "USD",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);
export default store;
