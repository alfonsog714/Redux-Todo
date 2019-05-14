import React from "react";

const Todo = props => {
  return (
    <div>
      <strong>Task</strong> :<p>{props.todo.value}</p>
    </div>
  );
};

export default Todo;
