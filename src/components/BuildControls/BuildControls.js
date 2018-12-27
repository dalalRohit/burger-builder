import React from 'react'

//BUTTON
import Button from '@material-ui/core/Button';

//BuildControl
import BuildControl from './BuildControl/BuildControl';

//css
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];


const buildControls = (props) => {
    let b = null;

    //getting ingre value(Number) from state
    //if total sum of ing is 0,disable the button
    let sum = Object.keys(props.ingredients).map((i) => {
        return props.ingredients[i];
    }).reduce((cur, el) => {
        return cur + el;
    }, 0);

    if (sum === 0) {
        b = (
            <Button disabled variant="contained" color='secondary'>Order Now</Button>
        );
    }
    else {
        b = (
            <Button variant="contained" onClick={props.ordered} color='secondary'>Order Now</Button>
        );
    }



    return (
        <div className={classes.build}>
            {
                controls.map((control) => {
                    return <BuildControl
                        ingredients={props.ingredients}
                        label={control.label}
                        key={control.type}
                        type={control.type}
                        add={() => { props.add(control.type) }}
                        remove={() => { props.remove(control.type) }} />;
                })
            }
            {b}
        </div>
    )
};

export default buildControls;
