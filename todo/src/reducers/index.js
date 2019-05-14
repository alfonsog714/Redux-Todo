// Imported actions
import { ADD_TODO, TOGGLE_TODO } from "../actions";

// Initial state
const initialState = {
  todos: [
    {
      id: 1,
      value: "Throw out the trash",
      completed: false
    },
    {
      id: 2,
      value: "Throw out the trash",
      completed: false
    }
  ]
};

// Root Reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 1000) + 1,
            value: action.payload,
            completed: false
          }
        ]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};
