import React from 'react';

//Aux
import Auxi from './../../../hoc/Auxi';

//BUTTON
import Button from '@material-ui/core/Button';

const orderSummary = (props) => {
    const ingSum = Object.keys(props.ingredients)
        .map((key) => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {key} : {props.ingredients[key]}
                    </span>
                </li>
            );
        });

    return (
        <Auxi>
            <h2 style={{
                textAlign: "center"
            }}>BurgerBuilder</h2>
            <h3>Your Order : ${props.price}</h3>
            <p>
                Ingredients:
            </p>
            <ul>
                {ingSum}
            </ul>
            <p>Checking out?</p>

            <Button color='primary' onClick={props.continue}> Checkout</Button>
            <Button color='secondary' onClick={props.cancel}> Cancel</Button>
        </Auxi>
    )
};

export default orderSummary;