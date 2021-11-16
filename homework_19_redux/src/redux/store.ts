import { combineReducers, createStore } from "redux";
import registrationReducer from "./reducers/registration";
import appReducer from "./reducers/app";
import limitReducer from "./reducers/limit";

const store = createStore(
  combineReducers(
    {
      registration: registrationReducer,
      app: appReducer,
      limit: limitReducer
    },
  ),
);

export default store;
