import React, { useReducer } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/todoForm";
import Todo from "./components/todo";
import { localStorage } from "local-storage";
import { reducer, initialState } from "../src/reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // toggleComplete = id => {
  //   return event => {
  //     setState(currentState => ({
  //       todos: currentState.todos.map(todo => {
  //         if (todo.id !== id) return todo;
  //         return { ...todo, completed: !todo.completed };
  //       })
  //     }));
  //   };
  // };
  // removeTodos = () => {
  //   setState(currentState => ({
  //     todos: currentState.todos.filter(todo => !todo.completed)
  //   }));

  //   const addTodo = e => {
  //     e.preventDefault();
  //     if (!state.todo) return false;
  //     dispatch({
  //       type: ADD_TODO
  //     });
  //   };
  //   const todoOnChange = e => {
  //     dispatch({
  //       type: ON_INPUT_CHANGE,
  //       payload: { todo: e.target.value }
  //     });
  //   };
  //   const { todos, todo, search } = state;
  //   const searchedTodos = search
  //     ? todos.filter(_todo => _todo.task.includes(search))
  //     : todos;
  return (
    <>
      <TodoList
        todoList={state.todoList}
        // toggleComplete={toggleComplete}
      />
      <TodoForm
      // todo={todo}
      // todoOnChange={todoOnChange}
      // addTodo={addTodo}
      // removeTodos={removeTodos}
      />
    </>
  );
};

export default App;

//for search functionality
// persistState = (key, value) => {
//   localStorage.setItem(key, value);
// };
