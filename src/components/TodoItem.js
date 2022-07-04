/* eslint-disable */
import React from "react"

class TodoItem extends React.Component {
  render() {
    const { title, id } = this.props.todo;
    const { completed } = this.props.todo;
    const { handleChangeProps, delTodoProps } = this.props;
    return  (
      <li>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => handleChangeProps(id)}
        /> 
        <button onClick={() => delTodoProps(id)}>Delete</button>
        {title}
      </li>
    )
  }
}

export default TodoItem