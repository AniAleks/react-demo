import React from 'react';

// class NewTask extends React.Component {

//     handleDeleteButton = (id) => {
//         this.props.onTaskDelete(id);
//     }


//     render() {

//         return (
//             <div className="tasksdiv" >
//             <input type="checkbox"
//             //  onChange={(this.handleCheckbox(id))} defaultChecked={false}
//              />
//             <h3>{this.props.title}</h3>
//             <p>{this.props.task}</p>
//             <button onClick={this.handleDeleteButton}>Delete Task</button>
//         </div>);

//     }
// }

function NewTask(props) {
    return (
        <div className="tasksdiv" >
            <input type="checkbox"
             onClick={props.handleCheckbox} 
             />
            <h3>{props.title}</h3>
            <p>{props.task}</p>
            <button onClick={props.onDelete}>Delete Task</button>
        </div>);
}

export default NewTask;