import { combineReducers } from 'redux';
import usersListReducer from './usersList';
import userInfoReducer from './userInfo';
import userPostsReducer from './userPosts';
import postsListReducer from './postsList';
import loginReducer from './login';
import registrationFormReducer from './registrationForm';
import userModalReducer from './userModalForm';
import postModalReducer from './postModal';
import postModalPostReducer from './postModalPost';
import postModalCommentsReducer from './postModalComments';
import languageSelectorReducer from './languageSelector';

const rootReducer = combineReducers(
  {
    usersList: usersListReducer,
    userInfo: userInfoReducer,
    userPosts: userPostsReducer,
    postsList: postsListReducer,
    login: loginReducer,
    registration: registrationFormReducer,
    userModal: userModalReducer,
    postModal: postModalReducer,
    postModalPost: postModalPostReducer,
    postModalComments: postModalCommentsReducer,
    languageSelector: languageSelectorReducer
  },
);

export default rootReducer;
