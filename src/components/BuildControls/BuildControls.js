import React from 'react'

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
        </div>
    )
};

export default buildControls;
