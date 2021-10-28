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

    this.indexStart = 100;

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

  createTodoItem(text: string, done: boolean = false) {
    return {
      text,
      done: done,
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

  deleteItem(index: number) {
    this.setState(({ todoItems }) => {
      const targetIndex = todoItems.findIndex((el: ITodoItem) => el.id === index);

      const newArray = [
        ...todoItems.slice(0, targetIndex),
        ...todoItems.slice(targetIndex + 1)
      ];

      return {
        todoItems: newArray
      }
    });
  };

  onToggleDone(index: number) {
    this.setState(({ todoItems }) => {
      const targetIndex = todoItems.findIndex((el: ITodoItem) => el.id === index);
      const newItem = this.createTodoItem(todoItems[targetIndex].text, !todoItems[targetIndex].done);

      const newArray = [
        ...todoItems.slice(0, targetIndex),
        newItem,
        ...todoItems.slice(targetIndex + 1)
      ];

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
