import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
  } 
  render() {
    return (
      <form onSubmit={e => this.props.addToDo(e)}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={this.props.inputValue}
          onChange={e=>this.props.update(e)}
        />
        <button type="submit">Add Todo</button>
        <div onClick={()=>this.props.clear()}>Clear Completed</div>
      </form>
    )
  }
}

export default TodoForm;