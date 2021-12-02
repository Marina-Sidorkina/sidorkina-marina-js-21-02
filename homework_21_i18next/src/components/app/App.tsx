import React, { useEffect } from 'react';
import './App.scss';
import {
  Route, Switch, HashRouter, Redirect
} from 'react-router-dom';
import i18next from 'i18next';
import Header from '../headerComponents/header/Header';
import Footer from '../footerComponents/footer/Footer';
import Posts from '../../pages/posts/Posts';
import Users from '../../pages/users/Users';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import Profile from '../../pages/profile/Profile';
import { ThemeContextProvider, ThemeContext } from '../../contexts/ThemeContext';
import { IThemeContextState } from '../../../../homework_20_middleware/src/@types/interfaces/themeContext';
import { RUSSIAN_LANGUAGE } from '../../constants/components';

function App() {
  useEffect(() => {
    i18next.changeLanguage(RUSSIAN_LANGUAGE);
  }, []);

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {(context: Partial<IThemeContextState>) => (
          <div className={`app ${context.darkTheme ? 'app_dark' : ''}`}>
            <HashRouter>
              <Header />
              <Switch>
                <Route path="/profile/:id">
                  <Profile />
                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/posts">
                  <Posts />
                </Route>
                <Redirect from="/" to="/posts" />
              </Switch>
            </HashRouter>
            <Footer />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
