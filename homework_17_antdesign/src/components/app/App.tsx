import React, { useState } from "react";
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { ThemeContextProvider, ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import UserCard from "../userCard/UserCard";
import Registration from "../registration/Registration";

const App = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPageLimit, setPerPageLimit ] = useState(10);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showNavItems, setShowNavItems ] = useState(true);
  const [ itemsAmount, setItemsAmount ] = useState(0);
  const [ currentMenuItem, setCurrentMenuItem ] = useState("main")

  const onPageChange = (id: number) => {
    setCurrentPage(id);
  }

  const onLimitPerPageChange = (value: number) => {
    if(currentPage > Math.ceil(itemsAmount / value)) {
      setCurrentPage(Math.ceil(itemsAmount / value));
    }
    setPerPageLimit(value);
  }

  const onMenuItemChange = (value: string) => {
    setCurrentMenuItem(value);
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
                            showLimit={ showNavItems }
                            perPageLimit={ perPageLimit }
                            currentMenuItem={ currentMenuItem }
                            omMenuItemChange={ onMenuItemChange }/>

                    <main className="main app__main">
                      <Switch>
                        <Route path="/registration">
                          <Registration
                            setShowNavItems={ setShowNavItems }
                            setCurrentMenuItem={ setCurrentMenuItem }/>
                        </Route>
                        <Route path="/user/:id">
                          <UserCard setShowNavItems={ setShowNavItems }
                                    setIsLoading={ setIsLoading }/>
                        </Route>
                        <Route path="/list">
                          <UsersList setShowNavItems={ setShowNavItems }
                                     setIsLoading={ setIsLoading }
                                     currentPage={ currentPage }
                                     perPageLimit={ perPageLimit }
                                     setItemsAmount={ setItemsAmount }
                                     setCurrentMenuItem={ setCurrentMenuItem }/>
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer currentPage={ currentPage }
                            onPageChange={ onPageChange }
                            showPaginator={ showNavItems }
                            itemsAmount={ itemsAmount }
                            perPageLimit={ perPageLimit }/>
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
