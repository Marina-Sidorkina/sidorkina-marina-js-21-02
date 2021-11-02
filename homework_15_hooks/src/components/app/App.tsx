import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { getUsersList } from "../../api/dummyApi";
import { IDummyApiResponse, IDummyUser } from "../../@types/interfaces/dummyApi";
import { ThemeContextProvider, ThemeContextConsumer } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";

const App = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ perPageLimit, setPerPageLimit ] = useState(10);
  const [ users, setUsers ] = useState([] as IDummyUser[]);
  const [ isLoading, setIsLoading ] = useState(false);

  const updateUsersList = (data: IDummyApiResponse) => {
    setUsers(data.data);
    setIsLoading(false);
  }

  const loadUsersList = (page: number, limit: number) => {
    setIsLoading(true);
    getUsersList(
      page,
      limit,
      updateUsersList,
      console.error);
  }

  const  onPageChange = (id: number) => {
    setCurrentPage(id);
    loadUsersList(id - 1, perPageLimit);
  }

  const onLimitPerPageChange = (value: number) => {
    setPerPageLimit(value);
    loadUsersList(currentPage - 1, value);
  }

  useEffect(() => {
    loadUsersList(currentPage - 1, perPageLimit);
  }, [])

  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {
          (context: Partial<IThemeContextState>) => {
            return (
              <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                <div className="app__container">
                  <Header className={ context.darkTheme ? "header_dark" : "" }
                          onLimitChange={ onLimitPerPageChange }
                          isLoading={ isLoading }/>

                  <main className="main app__main">
                    <UsersList list={ users }
                                userClassName={ context.darkTheme ? "user_dark" : "" }/>
                  </main>

                  <Footer currentPage={ currentPage }
                          onPageChange={ onPageChange }
                          themeClassName={ context.darkTheme ? "theme_dark" : "" }
                          paginatorClassName={ context.darkTheme ? "paginator_dark" : "" }/>
                </div>
              </div>
            );
          }
        }
      </ThemeContextConsumer>
    </ThemeContextProvider>
  );
}

export default App;
