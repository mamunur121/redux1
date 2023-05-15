const initialState = {
  amount: "1.00",
  currencyCode: "USD",
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rates/updateAmount":
      return { ...state, amount: action.payload };
    case "rates/updateCurrencyCode":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
};

export default rateReducer;

export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// action types
export const UPDATE_AMOUNT = "rates/updateAmount";
export const UPDATE_CURRENCY_CODE = "rates/updateCurrencyCode";

// action creators
export const updateAmount = (amount) => ({
  type: UPDATE_AMOUNT,
  payload: amount,
});

export const updateCurrencyCode = (currencyCode) => ({
  type: UPDATE_CURRENCY_CODE,
  payload: currencyCode,
});
