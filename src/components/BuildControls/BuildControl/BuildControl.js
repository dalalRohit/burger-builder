import React from 'react'

//icon
import Icon from '@material-ui/core/Icon';

//css
import classes from './BuildControl.css';

const buildControl = (props) => {
    let color = { add: 'secondary', remove: 'secondary' };


    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label} {props.ingredients[props.type]}</div>

            <Icon className={classes.icon} onClick={props.add} color={color.add}>
                add_circle
            </Icon>

            <Icon className={classes.icon} onClick={props.remove} color={color.remove}>
                remove_circle
            </Icon>
        </div>
    )
};

export default buildControl;