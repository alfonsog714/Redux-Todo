// Imported actions
import { ADD_TODO } from "../actions";

// Initial state
const initialState = {
  todos: [
    {
      id: 1,
      todo: "Throw out the trash",
      completed: false
    },
    {
      id: 2,
      todo: "Wash the dishes",
      completed: false
    }
  ]
};

// Root Reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};
