import React from "react";

import { connect } from "react-redux";

// Component imports
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <TodoList todos={props.todosFromRedux} />
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
