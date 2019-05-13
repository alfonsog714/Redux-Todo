import React from "react";

const Todo = props => {
  return (
    <div>
      <strong>{props.todo.id}</strong> :<p>{props.todo.todo}</p>
    </div>
  );
};

export default Todo;
