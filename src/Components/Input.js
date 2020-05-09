import React from 'react';
import Data from './Data';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            inputText:''
        };
    }
    handleClick=()=>{
   
    this.setState({text:this.state.inputText});
   
  
    }

    handleChange=(e)=>{
        this.setState({inputText: e.target.value});
    }
    render(){
        return (
            <div>
                <input type="text" className='input' onChange={this.handleChange}/>
                <button type="button" className="button" onClick={this.handleClick}>Sumbit</button>
                <Data text={this.state.text}/>
            </div>
        )
    }

}

export default Input;