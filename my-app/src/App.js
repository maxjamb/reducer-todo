import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import { localStorage } from "local-storage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };
  }
  persistState = (key, value) => {
    localStorage.setItem(key, value);
  };
  toggleComplete = id => {
    return event => {
      this.setState(currentState => ({
        todos: currentState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return { ...todo, completed: !todo.completed };
        })
      }));
    };
  };
  removeTodos = () => {
    this.setState(currentState => ({
      todos: currentState.todos.filter(todo => !todo.completed)
    }));
  };
  addTodo = e => {
    e.preventDefault();
    this.setState(currentState => {
      if (!currentState.todo) return false;
      return {
        todos: [
          ...currentState.todos,
          {
            id: Date.now(),
            task: currentState.todo,
            completed: false
          }
        ],
        todo: ""
      };
    });
  };

  todoOnChange = e => {
    this.setState({
      todo: e.target.value
    });
  };
  render() {
    const { todos, todo, search } = this.state;
    const searchedTodos = search
      ? todos.filter(_todo => _todo.task.includes(search))
      : todos;
    return (
      <>
        <TodoList data={searchedTodos} toggleComplete={this.toggleComplete} />
        <TodoForm
          todo={todo}
          todoOnChange={this.todoOnChange}
          addTodo={this.addTodo}
          removeTodos={this.removeTodos}
        />
      </>
    );
  }
}
