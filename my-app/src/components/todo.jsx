import React from "react";

export default function Todo(props) {
  const todo = props.data;
  return (
    <div
      className={`task task_${todo.id}${todo.completed && " completed"}`}
      // onClick={props.toggleComplete(todo.id)}
    >
      "<span>{todo.task}</span>" is {!todo.completed && "not "}complete!
    </div>
  );
}
