import { createStore } from "redux";

const initialState = {
  amount: "1.00",
  currencyCode: "USD",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateAmount":
      return { ...state, amount: action.payload };
    case "updateCurrencyCode":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
