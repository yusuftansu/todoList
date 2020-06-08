import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer=(state,action)=>{
  switch(action.type){
    case "DELETE_TODO":
      return{
          ...state,
          todos: state.todos.filter(todos => action.payload !== todos.id)
      }
    case "ADD_TODO":
      return{
        ...state,
        todos: [...state.todos,action.payload]
      }
      default:
        return state;
  }

}

export  class UserProvider extends Component {
    state={
        todos:[
          {id:1, note:"Read a Book!"},
          {id:2, note:"Sleep Early!"},
          {id:3, note:"Work Hard!!"}
    
        ],
        dispatch: action=>{
          this.setState(state => reducer(state,action))
        }
      }
    render() {
        return (
            <UserContext.Provider value={this.state}>
            {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;