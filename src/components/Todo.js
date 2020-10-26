import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p onClick={()=>{this.props.checkComplete(this.props.todo.id)}} className={this.props.todo.completed ? "strikethrough" : ""}>{this.props.todo.title}</p>
      </div>
    )
  }

}

export default Todo;