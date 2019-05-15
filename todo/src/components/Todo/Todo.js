import React from "react";
import "./Todo.css";

import { connect } from "react-redux";
import { toggleTodo } from "../../actions";

const Todo = props => {
  const toggleTodoCompleted = id => {
    props.toggleTodo(id);
  };

  return (
    <div
      onClick={() => toggleTodoCompleted(props.todo.id)}
      className={props.todo.completed ? "completed" : ""}
    >
      <strong>Task</strong> :<p>{props.todo.value}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(Todo);
