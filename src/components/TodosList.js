/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';
class TodosList extends React.Component {
  render() {
    const { todos, handleChangeProps, delTodoProps, setUpdateProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} delTodoProps={delTodoProps} setUpdateProps={setUpdateProps}/>
        ))}
      </ul>
    );
  }
}

export default TodosList;
