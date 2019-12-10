import React, { useReducer } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import { localStorage } from "local-storage";
import { reducer, initialState } from "../src/reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleComplete = id => {
    return event => {
      dispatch({
        type: "TOGGLE_COMPLETE",
        payload: id
      });
    };
  };
  const removeTodos = () => {
    dispatch({
      type: "CLEAR_COMPLETE"
    });
  };
  const addTodo = e => {
    e.preventDefault();
    if (!state.todo) return false;
    dispatch({
      type: "ADD_TODO"
    });
  };
  const todoOnChange = e => {
    dispatch({
      type: "ON_INPUT_CHANGE",
      payload: { todo: e.target.value }
    });
  };
  const { todos, todo, search } = state;
  const searchedTodos = search
    ? todos.filter(_todo => _todo.task.includes(search))
    : todos;
  return (
    <>
      <TodoList todoList={state.todoList} toggleComplete={toggleComplete} />
      <TodoForm
        todo={todo}
        todoOnChange={todoOnChange}
        addTodo={addTodo}
        dispatch={dispatch}
        removeTodos={removeTodos}
      />
    </>
  );
};

export default App;

//for search functionality
// persistState = (key, value) => {
//   localStorage.setItem(key, value);
// };
