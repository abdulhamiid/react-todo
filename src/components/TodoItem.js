/* eslint-disable */
import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  render() {

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { title, id } = this.props.todo;
    const { completed } = this.props.todo;
    const { handleChangeProps, delTodoProps, setUpdateProps } = this.props;
    return  (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type="checkbox" 
            checked={completed}
            className={styles.checkbox}
            onChange={() => handleChangeProps(id)}
          /> 
          <button onClick={() => delTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={e => {
            setUpdateProps(e.target.value, id)
          }}
        />
      </li>
    )
  }
}

export default TodoItem