import React, { useReducer } from "react";

export const initialState = {
  todoList: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const RESET_COUNT = "RESET_COUNT";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const ADD_TODO = "ADD_TODO"; //DO THIS for immutability

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    case RESET_COUNT:
      return { ...state, count: 0 };
    case ADD_TODO:
      return { ...state, todoList: [...state.todolist, action.payLoad] };
    default:
      return state;
  }
};
