import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [],
      inputValue: "",
    };
    this.update = this.update.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.clear = this.clear.bind(this);
    this.checkComplete = this.checkComplete.bind(this);
  }
  update(e) {
    this.setState({...this.state, inputValue: e.target.value});
  }
  checkComplete(completedId) {
    let newArray = [...this.state.list];
    for (let i in this.state.list) {
      if (this.state.list[i].id == completedId) {
        newArray[i].completed = true;
      }
    }
    this.setState({...this.state, list: newArray})
  }

  addToDo(e) {
    e.preventDefault();
    let updatedArray = [...this.state.list];
    let newToDo = {
      title: this.state.inputValue,
      id: Date.now(),
      completed: false,
    };
    updatedArray.push(newToDo);
    this.setState({list: updatedArray, inputValue: ""});
  }
  clear() {
    let newList = this.state.list 
    let filtered = newList.filter(item => !item.completed)
    console.log(filtered)
    this.setState({list: filtered});
  }
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList 
          list={this.state.list}
          checkComplete={this.checkComplete}
        />
        <TodoForm 
          addToDo={this.addToDo}
          update={this.update}
          clear={this.clear}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}

export default App;
