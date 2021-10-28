import React from 'react';
import './App.css';

interface ITodoItem {
  text: string
  done: boolean,
  id: number
}

interface IAppState {
  todoItems: ITodoItem[];
}

class App extends React.Component<{}, IAppState> {
  private indexStart: number;

  constructor(props: {}) {
    super(props);

    this.state = {
      todoItems: [
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Create Todo List")
      ]
    }

    this.indexStart = 100;
  }

  createTodoItem(text: string) {
    return {
      text,
      done: false,
      id: this.indexStart++
    }
  };

  addItem(text: string) {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoItems }) => {
      const newArray = [
        ...todoItems,
        newItem
      ];

      return {
        todoItems: newArray
      }
    });
  }

  deleteItem(index: string) {
    this.setState(({ todoItems }) => {
      const index = todoItems.findIndex((el) => el.id === index);

      const newArray = [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
      ];

      return {
        todoItems: newArray
      }
    });
  };

  render() {
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
}

export default App;
