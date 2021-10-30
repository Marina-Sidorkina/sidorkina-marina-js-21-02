import React from "react";
import "./App.css";

const user = {
  id: "ghajHAGSJHgajshg",
  title: "Mr",
  firstName: "John",
  lastName: "Doe"
}

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <header className="header app__header">
          <h1 className="header__title">Пользователи</h1>
        </header>
        <main className="main app__main">
          <ul className="users-list main__users-list">
            <li className="user users-list__item">
              <img className="user__img" src="http://placehold.it/80x80" alt="User"/>
              <div className="user__info">
                <div className="user__id">{ user.id }</div>
                <span className="user__title">{ user.title } </span>
                <span className="user__name">{ user.firstName } </span>
                <span className="user__surname">{ user.lastName }</span>
              </div>
            </li>
            <li className="user users-list__item">
              <img className="user__img" src="http://placehold.it/80x80" alt="User"/>
              <div className="user__info">
                <div className="user__id">{ user.id }</div>
                <span className="user__title">{ user.title } </span>
                <span className="user__name">{ user.firstName } </span>
                <span className="user__surname">{ user.lastName }</span>
              </div>
            </li>
            <li className="user users-list__item">
              <img className="user__img" src="http://placehold.it/80x80" alt="User"/>
              <div className="user__info">
                <div className="user__id">{ user.id }</div>
                <span className="user__title">{ user.title } </span>
                <span className="user__name">{ user.firstName } </span>
                <span className="user__surname">{ user.lastName }</span>
              </div>
            </li>
            <li className="user users-list__item">
              <img className="user__img" src="http://placehold.it/80x80" alt="User"/>
              <div className="user__info">
                <div className="user__id">{ user.id }</div>
                <span className="user__title">{ user.title } </span>
                <span className="user__name">{ user.firstName } </span>
                <span className="user__surname">{ user.lastName }</span>
              </div>
            </li>
          </ul>
          <footer className="footer">
            <ul className="paginator">
              <li className="paginator__item"><a className="paginator__link paginator__link_current" href="#">1</a></li>
              <li className="paginator__item"><a className="paginator__link" href="#">2</a></li>
              <li className="paginator__item"><a className="paginator__link" href="#">3</a></li>
              <li className="paginator__item"><a className="paginator__link" href="#">4</a></li>
              <li className="paginator__item"><a className="paginator__link" href="#">5</a></li>
            </ul>
            <form className="theme">
            <label className="theme__label" htmlFor="theme">Тёмная тема</label>
              <input className="theme__input" type="checkbox" id="theme"/>
            </form>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
