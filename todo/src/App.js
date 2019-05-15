import React from "react";

import { connect } from "react-redux";

// Component imports
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <TodoList todos={props.todosFromRedux} />
      <TodoForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todosFromRedux: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
