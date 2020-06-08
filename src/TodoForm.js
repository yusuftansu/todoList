import React, { Component } from 'react'
import UserConsumer from './context';

var uniqid = require('uniqid');

class TodoForm extends Component {
    state={
        note:"",
        id:""
    }


    changeInput=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    //    e.target.value='cc';
       console.log(this.state.note)
    }

    addNote=(dispatch,e)=>{
        e.preventDefault(); 
        this.setState({
            note:''
        })
        const{addNotes}=this.props
        const{note}=this.state
        let newNote={
            note,
            id:uniqid()
        }

        dispatch({type:"ADD_TODO",payload:newNote})
        
        console.log(newNote.id)


    }



    render() {
        const{note} = this.state
       return(
           <UserConsumer>
                {
                    value=>{
                        const{dispatch}=value
                        return (
                            <div className="col-md-6 mb-2">
                                <form onSubmit={this.addNote.bind(this,dispatch)}>
                              <label htmlFor="note">Note</label>
                                    <input 
                                    className="form-control" 
                                    type="text"
                                    name="note"
                                    value={note}
                                    placeholder="What need tobe done!"
                                    onChange={this.changeInput}
                                    >
                                    </input>
                                    <button type="submit" className="oval">Add</button>
                                </form>
                                
                            </div>
                        )
                    }
                }
           </UserConsumer>
       )
    }
}
export default TodoForm;