import React from 'react'

//css
import classes from './Spinner.css';


const spinner = (props) => {
    return (
        <div className={classes.Spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default spinner;