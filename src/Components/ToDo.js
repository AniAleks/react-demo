import React, { Component, Fragment } from 'react';
// import Task from './Task';
import NewInput from './NewInput';
import NewTask from './NewTask';



class ToDo extends Component {
    state = {

        tasks: [],
        tasksId:new Set(),
    }
    idGenerator() {
        return Math.random().toString(32).slice(2);
    }

    // handleInputChange = (e) => {

    //     this.setState({ inputValue: e.target.value });
    // }

    // handlebuttonClick = () => {
    //     this.setState({
    //         tasks: [...this.state.tasks, {task: this.state.inputValue, title: this.state.inputValue.slice(0, 10), id: this.idGenerator()}],
    //         inputValue: ''
    //     });

    // }

    addTask = (inputValue) => {
        const tasks = [...this.state.tasks];
        tasks.push({ task: inputValue, title: inputValue.slice(0, 10), id: this.idGenerator() });
        this.setState({ tasks });
    }

    deleteTask = (id)=>() => {
        
        const newTasksId = new Set(this.state.tasksId);
        newTasksId.delete(id);
            this.setState({
                tasks: this.state.tasks.filter((el) => el.id !== id),
                tasksId:newTasksId
            })
        }



    // handleDeleteButton=(id)=>{
    //     this.setState({
    //         tasks:(this.state.tasks.filter((el)=>el.id!==id))
    
    //     })
    // }

    addCheckboxId=(id)=>()=>{
       
       let tasksId=new Set(this.state.tasksId);
       if(tasksId.has(id)){
           tasksId.delete(id)
       }
       else{
           tasksId.add(id)
       }
       this.setState({tasksId})
    }

    removeBulkHandler=()=>{
        let {tasks, tasksId} = this.state;

        tasksId.forEach(id =>{
            tasks = tasks.filter(task => task.id !== id);
        });

        this.setState({
            tasks,
            tasksId: new Set()
        });

    }

  

    render() {
        console.log(this.state.tasksId)
        // const tasks = this.state.tasks
        //     .map(({id,task,title}) => <div className="tasksdiv" key={id}>
        //          <input type="checkbox" onChange={(this.handleCheckbox(id))} checked={this.state.checked}/> 
        //      <h3>{title}</h3> <p>{task}</p> <button onClick={() => (this.handleDeleteButton(id))}>Delete Task</button> </div>);
      
            const tasks = this.state.tasks
            .map(({id,title,task}) => { 
                return(
                    <NewTask key={id} 
                    title={title} 
                    task={task}
                    onDelete={this.deleteTask(id)}
                    handleCheckbox={this.addCheckboxId(id)}/>
                )
            });
        return (

            <Fragment>
                {/* <input type="text" className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
                <button className="button" onClick={this.handlebuttonClick}>Create Task</button> */}

                <NewInput onTaskAdd={this.addTask} />
               {tasks}
               <button onClick={this.removeBulkHandler}
               disabled = {!this.state.tasksId.size}>

                   Delete Checked Tasks</button>
            </Fragment>
        )
    }
}

export default ToDo;