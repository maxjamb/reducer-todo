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

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            task: state.todo,
            completed: false
          }
        ],
        todo: ""
      };
    case ON_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
