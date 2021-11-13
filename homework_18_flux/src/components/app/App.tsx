import React, {useEffect, useState} from "react";
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { ThemeContextProvider, ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import UserCard from "../userCard/UserCard";
import Registration from "../registration/Registration";
import appStore from "../../stores/app";

const App = () => {
  const [settings, setSettings] = useState(appStore.getSettings());

  useEffect(() => {
    appStore.on("change", () => {
      setSettings({...appStore.getSettings()})
    });
  }, [])

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
          (context: Partial<IThemeContextState>) => {
            return (
              <HashRouter>
                <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                  <div className="app__container">
                    <Header showLimit={ settings.showNavItems }
                            perPageLimit={ settings.perPageLimit }
                            currentMenuItem={ settings.currentMenuItem }
                            isLoading={ settings.isLoading }/>

                    <main className="main app__main">
                      <Switch>
                        <Route path="/registration">
                          <Registration />
                        </Route>
                        <Route path="/user/:id">
                          <UserCard />
                        </Route>
                        <Route path="/list">
                          <UsersList currentPage={ settings.currentPage }
                                     perPageLimit={ settings.perPageLimit }/>
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer currentPage={ settings.currentPage }
                            showPaginator={ settings.showNavItems }
                            itemsAmount={ settings.itemsAmount }
                            perPageLimit={ settings.perPageLimit }/>
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

export default App;
