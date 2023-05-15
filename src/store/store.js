import { combineReducers, createStore } from "redux";
import userReducer from "./user.js";
import rateReducer from "./rates.js";

const store = createStore(
  combineReducers({
    user: userReducer,
    rates: rateReducer,
  })
);
export default store;
