import React, { Component, Fragment } from 'react';
// import Task from './Task';



class ToDo extends Component {
    state = {
        inputValue: '',
        tasks: [],
    }
    idGenerator() {
        return Math.random().toString(32).slice(2);
    }

    handleInputChange = (e) => {

        this.setState({ inputValue: e.target.value });
    }

    handlebuttonClick = () => {
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.inputValue, title: this.state.inputValue.slice(0, 10), id: this.idGenerator()}],
            inputValue: ''
        });

    }
    handleDeleteButton=(id)=>{
        this.setState({
            tasks:[...(this.state.tasks.filter((el)=>el.id!==id))]
        })
    }

    render() {
        const tasks = this.state.tasks
        .map(task => <div className="tasksdiv" key={task.id}> <h3>{task.title}</h3> <p>{task.task}</p> <button onClick={()=>(this.handleDeleteButton(task.id))}>Delete Task</button> </div>);
        return (
            <Fragment>
                <input type="text" className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
                <button className="button" onClick={this.handlebuttonClick}>Create Task</button>
                 {tasks}      
            </Fragment>
        )
    }
}

export default ToDo;