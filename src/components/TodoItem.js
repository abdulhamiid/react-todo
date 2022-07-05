/* eslint-disable */
import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { title, id } = this.props.todo;
    const { completed } = this.props.todo;
    const { handleChangeProps, delTodoProps } = this.props;
    return  (
      <li className={styles.item}>
        <input 
          type="checkbox" 
          checked={completed}
          className={styles.checkbox}
          onChange={() => handleChangeProps(id)}
        /> 
        <button onClick={() => delTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    )
  }
}

export default TodoItem