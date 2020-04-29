import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todos" style={this.getStyle()}>
        <p>
          <input type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          /> {' '}
          { title }
          <button
            className="btn btn-danger"
            onClick={this.props.deleteTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
