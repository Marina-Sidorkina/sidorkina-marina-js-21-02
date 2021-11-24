import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersListReducer from './reducers/usersList';
import userInfoReducer from './reducers/userInfo';
import userPostsReducer from './reducers/userPosts';
import postsListReducer from './reducers/postsList';
import loginReducer from './reducers/login';
import registrationFormReducer from './reducers/registrationForm';

const store = createStore(
  combineReducers(
    {
      usersList: usersListReducer,
      userInfo: userInfoReducer,
      userPosts: userPostsReducer,
      postsList: postsListReducer,
      login: loginReducer,
      registration: registrationFormReducer
    },
  ),
  applyMiddleware(thunk)
);

export default store;