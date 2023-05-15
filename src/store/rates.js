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
