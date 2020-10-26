import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>todolist</h2>
        {this.props.list.map((item, idx)=> {
        return <Todo key={idx} todo={item} checkComplete={this.props.checkComplete}/>
      })}
      </div>
    );
  }
}

export default TodoList;