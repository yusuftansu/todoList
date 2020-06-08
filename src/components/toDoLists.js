import React, { Component } from "react";
import ToDoList from "./toDoList";
import UserConsumer from "../context";

class ToDoLists extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { todos } = value;

          return (
            <div>
              {todos.map((todo) => {
                return (
                  <ToDoList
                    key={todo.id}
                    id={todo.id}
                    note={todo.note}
                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ToDoLists;
