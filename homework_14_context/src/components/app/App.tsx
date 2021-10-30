import React from "react";
import "./App.css";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { IAppState } from "../../@types/interfaces/components";
import { getUsersList } from "../../api/dummyApi";
import { IDummyApiResponse } from "../../@types/interfaces/dummyApi";
import { ThemeContextProvider, ThemeContextConsumer } from "../../contexts/ThemeContext";
import { IThemeContextState } from "../../@types/interfaces/themeContext";

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentPage: 1,
      perPageLimit: 10,
      users: []
    }

    this.onPageChange = this.onPageChange.bind(this);
    this.updateUsersList = this.updateUsersList.bind(this);
    this.onLimitPerPageChange = this.onLimitPerPageChange.bind(this);
  }

  componentDidMount() {
    this.loadUsersList(this.state.currentPage - 1, this.state.perPageLimit);
  }

  updateUsersList(data: IDummyApiResponse) {
    this.setState({
      users: data.data
    })
  }

  loadUsersList(page: number, limit: number) {
    getUsersList(
      page,
      limit,
      this.updateUsersList,
      console.error);
  }

  onPageChange(id: number) {
    this.setState({
      currentPage: id
    });

    this.loadUsersList(id - 1, this.state.perPageLimit);
  }

  onLimitPerPageChange(value: number) {
    this.setState({
      perPageLimit: value
    });

    this.loadUsersList(this.state.currentPage - 1, value);
  }

  render() {
    return (
      <ThemeContextProvider>
        <ThemeContextConsumer>
          {
            (context: Partial<IThemeContextState>) => {
              return (
                <div className={ `app ${ context.darkTheme ? "app_dark" : "" }` }>
                  <div className="app__container">
                    <Header className={ context.darkTheme ? "header_dark" : "" }
                            onLimitChange={ this.onLimitPerPageChange }/>

                    <main className="main app__main">
                      <UsersList list={ this.state.users }
                                  userClassName={ context.darkTheme ? "user_dark" : "" }/>
                    </main>

                    <Footer currentPage={ this.state.currentPage }
                            onPageChange={ this.onPageChange }
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
}

export default App;
