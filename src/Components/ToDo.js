import React, { Component, Fragment } from 'react';
import Task from './Task';



class ToDo extends Component {
  state={
      inputValue:'',
      tasks:[],
  }
  idGenerator(){
    return Math.random().toString(32).slice(2);
    }

  handleInputChange=(e)=>{
  
        this.setState({inputValue: e.target.value});
  }

  handlebuttonClick=()=>{
      this.setState({tasks:[...this.state.tasks,{task:this.state.inputValue,title:this.state.inputValue.slice(0,10)}],
      inputValue:''});
     
  }
      
    render() {
        return (
            <Fragment>
                <input type="text" className='input'    value ={this.state.inputValue} onChange={this.handleInputChange} />
                <button className="button" onClick={this.handlebuttonClick}>Create Task</button>
                {
                 this.state.tasks.map((el) =>  <div className='tasksdiv' key={this.idGenerator()}> <Task  title={el.title} task={el.task}/></div> )
                
                }
         
            </Fragment>
            )
        }
}

export default ToDo;