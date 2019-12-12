import React from "react";
import Todo from "./todo";

const TodoList = props => {
  //   console.log(props);
  return (
    <div className="todolist">
      <h1>Todo List</h1>
      {props.todoList.length > 0
        ? props.todoList.map(todo => (
            <Todo
              key={todo.id}
              data={todo}
              // toggleComplete={props.toggleComplete}
            />
          ))
        : null}
    </div>
  );
};
export default TodoList;
