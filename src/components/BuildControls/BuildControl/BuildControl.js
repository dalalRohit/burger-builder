import React from 'react'

//icon
import Icon from '@material-ui/core/Icon';

//css
import classes from './BuildControl.css';
// import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

const buildControl = (props) => {
    //prop to handle onClick for removing item
    let toRemove = null;

    //for dynamic class adjustment
    let color = { add: 'secondary', remove: 'secondary' };

    //adding 'disabled' to <Icon> if qty of that item is 0
    if (props.ingredients[props.type] === 0) {
        color.remove = 'disabled';
        toRemove = null;
    }
    else {
        toRemove = props.remove;
    }
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label} {props.ingredients[props.type]}</div>

            <Icon className={classes.icon} onClick={props.add} color={color.add}>
                add_circle
            </Icon>

            <Icon className={classes.icon} onClick={toRemove} color={color.remove}>
                remove_circle
            </Icon>


        </div>
    )
};

export default buildControl;