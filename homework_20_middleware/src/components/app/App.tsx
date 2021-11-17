import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { ThemeContextProvider, ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import UserCard from "../userCard/UserCard";
import Registration from "../registration/Registration";
import { connect } from "react-redux";

const App = () => {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
          (context: Partial<IThemeContextState>) => {
            return (
              <HashRouter>
                <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                  <div className="app__container">
                    <Header />

                    <main className="main app__main">
                      <Switch>
                        <Route path="/registration">
                          <Registration />
                        </Route>
                        <Route path="/user/:id">
                          <UserCard />
                        </Route>
                        <Route path="/list">
                          <UsersList />
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer />
                  </div>
                </div>
              </HashRouter>
            );
          }
        }
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default connect(
  (state: any) => ({
    isLoading: state.app.settings.isLoading
  })
)(App);
