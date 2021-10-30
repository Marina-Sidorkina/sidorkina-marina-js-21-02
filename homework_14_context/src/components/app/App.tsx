import React from "react";
import "./App.css";
import Header from "../header/Header";
import UsersList from "../usersList/UsersList";
import Footer from "../footer/Footer";
import { IAppState } from "../../@types/interfaces/components";

const list = [
  {
    id: "ghajHAGSJHgajshg1",
    title: "Mr",
    firstName: "John",
    lastName: "Doe",
    picture: "http://placehold.it/80x80"
  },
  {
    id: "ghajHAGSJHgajshg2",
    title: "Mr",
    firstName: "John",
    lastName: "Doe",
    picture: "http://placehold.it/80x80"
  },
  {
    id: "ghajHAGSJHgajshg3",
    title: "Mr",
    firstName: "John",
    lastName: "Doe",
    picture: "http://placehold.it/80x80"
  },
  {
    id: "ghajHAGSJHgajshg4",
    title: "Mr",
    firstName: "John",
    lastName: "Doe",
    picture: "http://placehold.it/80x80"
  }
]

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentPage: 1
    }

    this.onPageChange = this.onPageChange.bind(this);
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
            <UsersList list={ list }/>
          </main>
          <Footer currentPage={ this.state.currentPage }
                  onPageChange={ this.onPageChange }/>
        </div>
      </div>
    );
  }
}

export default App;
