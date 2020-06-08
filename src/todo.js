import React, { Component } from 'react'

class todoList extends Component {
    render() {
        const{todoS}=this.props;
        return (
            <div>
            {<h3>{todoS.note}</h3>}
                {
                    
                    todoS.map(todo =>{
                        return(
                            <h3>{todo.note}</h3>
                        )
                    })
                }
            </div>
        )
    }
}

export default  todoList;