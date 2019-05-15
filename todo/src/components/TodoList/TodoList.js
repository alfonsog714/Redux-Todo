import React from "react";

import Todo from "../Todo/Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
