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
            id: Math.floor(Math.random() * 10),
            value: action.payload,
            completed: false
          }
        ]
      };

    default:
      return state;
  }
};
