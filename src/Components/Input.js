import React from 'react';
import Data from './Data';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: ''
        };
    }
    handleClick = () => {

        this.setState({ text: this.state.inputText,inputText:''});
    


    }

    handleChange = (e) => {
        
        const nextState = {
            inputText: e.target.value,
        }
        if (this.state.text) {
            nextState.text = '';
        }
        this.setState(nextState);
    }
    render() {
        let showButton=false;
        if(this.state.inputText){
            showButton=true;
        }
        return (
            <div>
                <input type="text" value={this.state.inputText} className='input' onChange={this.handleChange} />
                {
                //  showButton?  <button type="button" className="button" onClick={this.handleClick}>Sumbit</button>: /* <p>Type text</p> */ null
                showButton && <button type="button" className="button" onClick={this.handleClick}>Sumbit</button>
                }
               <Data text={this.state.text} />
            </div>
        )
    }

}


export default Input;