import React, { useState } from "react";
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { ThemeContextProvider, ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import UserCard from "../userCard/UserCard";

const App = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPageLimit, setPerPageLimit ] = useState(10);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showNavItems, setShowNavItems ] = useState(true)

  const onPageChange = (id: number) => {
    setCurrentPage(id);
  }

  const onLimitPerPageChange = (value: number) => {
    setPerPageLimit(value);
  }

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {
          (context: Partial<IThemeContextState>) => {
            return (
              <HashRouter>
                <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                  <div className="app__container">
                    <Header onLimitChange={ onLimitPerPageChange }
                            isLoading={ isLoading }
                            showLimit={ showNavItems }/>

                    <main className="main app__main">
                      <Switch>
                        <Route path="/user/:id">
                          <UserCard setShowNavItems={ setShowNavItems }
                                    setIsLoading={ setIsLoading }/>
                        </Route>
                        <Route path="/list">
                          <UsersList setShowNavItems={ setShowNavItems }
                                     setIsLoading={ setIsLoading }
                                     currentPage={ currentPage }
                                     perPageLimit={ perPageLimit }/>
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer currentPage={ currentPage }
                            onPageChange={ onPageChange }
                            showPaginator={ showNavItems }/>
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
