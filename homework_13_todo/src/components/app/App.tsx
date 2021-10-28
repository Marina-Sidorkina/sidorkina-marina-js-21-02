import React from 'react';
import './App.css';
import Header from "../header/Header";
import Form from "../form/Form";

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
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
        <Header />
        <Form onItemSubmit={ this.addItem }/>

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
