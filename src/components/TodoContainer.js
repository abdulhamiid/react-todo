/* eslint-disable */
import React from 'react';
import Header from './Header';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      }
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <TodosList todos={todos} handleChangeProps={this.handleChange} />
      </>
    );
  }
}
export default TodoContainer;
