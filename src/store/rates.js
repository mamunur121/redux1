import { getExchangeRates } from "../api.js";

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const initialState = {
  amount: "1.00",
  currencyCode: "USD",
  currencyData: {
    USD: "1.00",
  },
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rates/updateAmount":
      return { ...state, amount: action.payload };
    case "rates/updateCurrencyCode":
      return { ...state, currencyCode: action.payload };
    case "rates/updateCurrencyData":
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
};

export default rateReducer;

export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

// action types
export const UPDATE_AMOUNT = "rates/updateAmount";
export const UPDATE_CURRENCY_CODE = "rates/updateCurrencyCode";
export const UPDATE_CURRENCY_DATA = "rates/updateCurrencyData";

// action creators
export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount,
});

export const updateCurrencyCode = (currencyCode) => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENCY_CODE,
    payload: currencyCode,
  });
  dispatch(updateCurrencyData(currencyCode));
};

export const updateCurrencyData = (currencyCode) => (dispatch) => {
  getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
    dispatch({
      type: UPDATE_CURRENCY_DATA,
      payload: rates,
    });
  });
};
