import React from 'react';
import Name from './Name';
import Surname from './Surname'

function User(props){
    return (
        <div>
        Hello, I am
        <span> <Name name={props.name}/></span>
       <span>  <Surname surname={props.surname}/></span>
      
    </div>
    )
}

export default User;



