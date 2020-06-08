import React, { Component } from 'react'
import ToDoLists from "./components/toDoLists"
import Navbar from './Navbar';
import TodoForm from './TodoForm';

class App extends Component {



  render() {
    return (
      <div className="container">
      <Navbar/>
      <hr/>
      <TodoForm />
      <ToDoLists />
    

      </div>     
    )
  }
}


export default App;
