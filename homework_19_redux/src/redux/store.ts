import { combineReducers, createStore } from "redux";
import registrationReducer from "./reducers/registration";
import appReducer from "./reducers/app";
import limitReducer from "./reducers/limit";
import usersListReducer from "./reducers/usersList";
import userCardReducer from "./reducers/userCard";

const store = createStore(
  combineReducers(
    {
      registration: registrationReducer,
      app: appReducer,
      limit: limitReducer,
      usersList:  usersListReducer,
      userCard: userCardReducer
    },
  ),
);

export default store;
