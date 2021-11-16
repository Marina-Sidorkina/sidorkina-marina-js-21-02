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

const App = (props: any) => {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
          (context: Partial<IThemeContextState>) => {
            return (
              <HashRouter>
                <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                  <div className="app__container">
                    <Header showLimit={ props.showNavItems }
                            perPageLimit={ props.perPageLimit }
                            currentMenuItem={ props.currentMenuItem }
                            isLoading={ props.isLoading }/>

                    <main className="main app__main">
                      <Switch>
                        <Route path="/registration">
                          <Registration />
                        </Route>
                        <Route path="/user/:id">
                          <UserCard />
                        </Route>
                        <Route path="/list">
                          <UsersList currentPage={ props.currentPage }
                                     perPageLimit={ props.perPageLimit }/>
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer currentPage={ props.currentPage }
                            showPaginator={ props.showNavItems }
                            itemsAmount={ props.itemsAmount }
                            perPageLimit={ props.perPageLimit }/>
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
    currentPage: state.app.settings.currentPage,
    perPageLimit: state.app.settings.perPageLimit,
    isLoading: state.app.settings.isLoading,
    showNavItems: state.app.settings.showNavItems,
    itemsAmount: state.app.settings.itemsAmount,
    currentMenuItem: state.app.settings.currentMenuItem
  })
)(App);
