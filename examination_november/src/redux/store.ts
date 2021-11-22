import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersListReducer from './reducers/usersList';

const store = createStore(
  combineReducers(
    {
      usersList: usersListReducer,
    },
  ),
  applyMiddleware(thunk)
);

export default store;
