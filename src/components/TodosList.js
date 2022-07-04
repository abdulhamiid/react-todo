/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';
class TodosList extends React.Component {
  render() {
    const { todos, handleChangeProps, delTodoProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} delTodoProps={delTodoProps}/>
        ))}
      </ul>
    );
  }
}

export default TodosList;
