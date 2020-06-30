import React from 'react';
import classes from './loader.module.css';


export default function Loader(){
    return (
        <div className={classes.loaderDiv}>
        <div className={classes.main}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}