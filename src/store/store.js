import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import userReducer from "./user.js";
import rateReducer from "./rates.js";

const rootReducer = combineReducers({
  user: userReducer,
  rates: rateReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);

export default store;
