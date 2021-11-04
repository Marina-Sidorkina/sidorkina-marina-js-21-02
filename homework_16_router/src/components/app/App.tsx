import React, { useEffect, useState } from "react";
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom';
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { getUsersList } from "../../api/dummyApi";
import { IDummyApiResponse, IDummyUser } from "../../@types/interfaces/dummyApi";
import { ThemeContextProvider, ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";
import UserCard from "../userCard/UserCard";

const App = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPageLimit, setPerPageLimit ] = useState(10);
  const [ users, setUsers ] = useState([] as IDummyUser[]);
  const [ isLoading, setIsLoading ] = useState(false);

  const updateUsersList = (data: IDummyApiResponse) => {
    setUsers(data.data);
    setIsLoading(false);
  }

  const onPageChange = (id: number) => {
    setCurrentPage(id);
  }

  const onLimitPerPageChange = (value: number) => {
    setPerPageLimit(value);
  }

  useEffect(() => {
    setIsLoading(true);
    getUsersList(
      currentPage - 1,
      perPageLimit,
      updateUsersList,
      console.error);
  }, [ currentPage, perPageLimit ])

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
                            isLoading={ isLoading }/>

                    <main className="main app__main">
                      <Switch>
                        <Route path="/user/:id">
                          <UserCard />
                        </Route>
                        <Route path="/list">
                          <UsersList list={ users }/>
                        </Route>
                        <Redirect from="/" to="/list" />
                      </Switch>
                    </main>

                    <Footer currentPage={ currentPage }
                            onPageChange={ onPageChange }/>
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
