import React from "react";

import { connect } from "react-redux";

import { addTodo } from "../../actions";

class TodoForm extends React.Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          placeholder="Enter a todo..."
          value={this.state.input}
          type="text"
          name="input"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
