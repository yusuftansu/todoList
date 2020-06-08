import React, { Component } from 'react'
import UserConsumer from '../context'

//mx-auto col-md-5 my-auto h-100
class ToDoList extends Component {

    deleteNote=(dispatch,e)=>{
        const{id}=this.props
        dispatch({type:"DELETE_TODO",payload:id})
    }
    render() {
        const{note}=this.props
        return(
            <UserConsumer>
                {
                    value=>{
                        const{dispatch}=value

                        return (
                            <div className="redd col-md-6 mb-1" >
                                <div className="card" style={{border: "2px solid tomato"}} >
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="head d-inline ">Notunuz</h4>
                                        <i onClick={this.deleteNote.bind(this,dispatch)} className="fas fa-backspace" style={{cursor:"pointer"}}></i>
                                    </div>
                                <div className="card-body">
                                <p className="card-text">{note}</p>
                                </div>
                                </div>
                                
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
export default ToDoList;