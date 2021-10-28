import React from 'react';
import './App.css';
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

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
    if(text) {
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
        <List items={ this.state.todoItems }/>
      </div>
    );
  }
}

export default App;
