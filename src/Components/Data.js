import React from 'react';

function Data(props){
return(
    <div>
        <h1>Your Data Here</h1>
       <span className='text'>{props.text}</span>
    </div>
)
}

export default Data;