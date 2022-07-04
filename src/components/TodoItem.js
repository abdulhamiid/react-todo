/* eslint-disable */
import React from "react"

class TodoItem extends React.Component {
  render() {
    const { title } = this.props.todo;
    const { completed } = this.props.todo;
    const { handleChangeProps } = this.props;
    return  (
      <li>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => handleChangeProps()}
        /> 
        {title}
      </li>
    )
  }
}

export default TodoItem