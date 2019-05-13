// Action Types

export const ADD_TODO = "ADD_TODO";

// Action Creators
export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
