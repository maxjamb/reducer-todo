export const initialState = {
  todoList: [
    {
      id: 3892987589,
      task: "Learn about reducers",
      completed: false
    }
  ]
};

//DO THIS for immutability

const ADD_TODO = "ADD_TODO";
const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const CLEAR_COMPLETE = "CLEAR_COMPLETE";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Date.now(),
            task: state.todo,
            completed: false
          }
        ],
        todo: ""
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todoList.map(todo => {
          if (todo.id !== action.payload) return todo;
          return { ...todo, completed: !todo.completed };
        })
      };
    case CLEAR_COMPLETE:
      return {
        ...state,
        todos: state.todoList.filter(todo => !todo.completed)
      };
    case ON_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
  }

  return state;
};
