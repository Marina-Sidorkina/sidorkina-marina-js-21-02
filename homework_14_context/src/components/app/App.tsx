import React from "react";
import "./App.css";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { IAppState } from "../../@types/interfaces/components";
import { getUsersList } from "../../api/dummyApi";
import { IDummyApiResponse } from "../../@types/interfaces/dummyApi";

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
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app__container">
          <Header/>

          <main className="main app__main">
            <UsersList list={ this.state.users }/>
          </main>

          <Footer currentPage={ this.state.currentPage }
                  onPageChange={ this.onPageChange }/>
        </div>
      </div>
    );
  }
}

export default App;
