import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header app__header">
        <h1 className="header__title">TodoList</h1>
      </header>
      <form className="form app__form">
        <input className="form__input" type="text" placeholder="New item"></input>
        <button className="form__button" type="submit">Add</button>
      </form>
      <ul className="list app__list">
        <li className="item list__item">
          <span className="list__text">
            <i className="list__icon far fa-calendar-alt"></i>
            <span className="list__span">Drink Coffee</span>
          </span>
          <button className="list__button" type="button">Done</button>
          <button className="list__button list__button_trash" type="button">
            <i className="far fa-trash-alt"></i>
          </button>
        </li>
        <li className="item list__item">
          <span className="list__text">
            <i className="list__icon far fa-calendar-alt"></i>
            <span className="list__span">Create TodoList</span>
          </span>
          <button className="list__button" type="button">Done</button>
          <button className="list__button list__button_trash" type="button">
            <i className="far fa-trash-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
