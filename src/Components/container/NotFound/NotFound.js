import React, { Component } from 'react';
import classes from './style.module.css';



class NotFound extends Component {

    render() {
        
        return (
            <>
            <h1 className={classes.heading}>Error 404!</h1>
<h2 className={classes.heading}>The page is not found!</h2>
            </>
        )
    }
}

export default NotFound;