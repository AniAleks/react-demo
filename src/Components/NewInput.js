import React from 'react';

class NewInput extends React.Component{

    state={
        inputValue: '',
    }

    handleInputChange = (e) => {

        this.setState({ inputValue: e.target.value });
    }
    handlebuttonClick = () => {
        const {inputValue}=this.state;
        if(!inputValue){
            return;
        }
        this.props.onTaskAdd(inputValue);
        this.setState({
            inputValue: ''
        });

    }
    
    render(){
        return (
            <>
            <input type="text" className='input' value={this.state.inputValue} onChange={this.handleInputChange} />
            <button className="button" onClick={this.handlebuttonClick}>Add Task</button>
            </>
        )
    }
   
}


export default NewInput;