import React from 'react';

export function IdGen(){

    return (
        <div> 
            <p> {Math.random().toString(36).substr(2, 6)}</p>
         
         </div>)
}


export function NewId(){
 return (
 <div>
     <h5> This was just an ID</h5>
 </div>)
}
