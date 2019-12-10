import React from "react";
import Todo from "./todo";

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.data;
    return (
      <div className="todolist">
        <h1>Todo List</h1>
        {todos.length > 0
          ? todos.map(todo => (
              <Todo
                key={todo.id}
                data={todo}
                toggleComplete={this.props.toggleComplete}
              />
            ))
          : null}
      </div>
    );
  }
}
