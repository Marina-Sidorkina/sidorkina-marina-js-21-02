import React from 'react';
import './App.css';
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import { ITodoItem, IAppState } from "../../@types/interfaces/interfaces";

class App extends React.Component<{}, IAppState> {
  private indexStart: number;

  constructor(props: {}) {
    super(props);

    this.indexStart = localStorage.getItem("todoListData") ?
      this.getLastIndex() : 100;

    this.state = {
      todoItems: [
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Create Todo List")
      ]
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
  }

  componentDidMount() {
    if(!localStorage.getItem("todoListData")) {
      localStorage.setItem("todoListData", JSON.stringify(this.state.todoItems));
    } else {
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("todoListData") as string)
      });
    }
  }

  getLastIndex() {
    const array = JSON.parse(localStorage.getItem("todoListData") as string);
    return array.length ? array[array.length - 1].id : 100;
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

        localStorage.setItem("todoListData", JSON.stringify(newArray));

        return {
          todoItems: newArray
        }
      });
    }
  }

  deleteItem(index: number) {
    this.setState(({ todoItems }) => {
      const targetIndex = todoItems.findIndex((el: ITodoItem) => el.id === index);

      const newArray = [
        ...todoItems.slice(0, targetIndex),
        ...todoItems.slice(targetIndex + 1)
      ];

      localStorage.setItem("todoListData", JSON.stringify(newArray));

      return {
        todoItems: newArray
      }
    });
  };

  onToggleDone(index: number) {
    this.setState(({ todoItems }) => {
      const targetIndex = todoItems.findIndex((el: ITodoItem) => el.id === index);
      const newItem = {...todoItems[targetIndex], done: !todoItems[targetIndex].done};

      const newArray = [
        ...todoItems.slice(0, targetIndex),
        newItem,
        ...todoItems.slice(targetIndex + 1)
      ];

      localStorage.setItem("todoListData", JSON.stringify(newArray));

      return {
        todoItems: newArray
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Form onItemSubmit={ this.addItem }/>
        <List items={ this.state.todoItems }
              onItemDelete={ this.deleteItem }
              onToggleDone={ this.onToggleDone }/>
      </div>
    );
  }
}

export default App;
