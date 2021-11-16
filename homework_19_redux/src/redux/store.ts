import { combineReducers, createStore } from "redux";
import registrationReducer from "./reducers/registration";

const store = createStore(
  combineReducers(
    {
      registration: registrationReducer
    },
  ),
);

export default store;
