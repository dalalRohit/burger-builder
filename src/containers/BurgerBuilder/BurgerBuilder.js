import React, { Component } from 'react';

//Aux
import Aux from '../../hoc/Auxi';

//css
import classes from './BurgerBuilder.css';

//BurgerIngredient
import Burger from './../../components/Burger/Burger';

//BuildControls
import BuildControls from '../../components/BuildControls/BuildControls';

const ingredientPrices = {
    salad: 0.9,
    cheese: 0.6,
    meat: 0.5,
    bacon: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        },
        price: 5
    };

    add = (type) => {
        //old count
        const oc = this.state.ingredients[type];
        //updated count
        const uc = oc + 1;
        //copy of OG ingredients
        const x = { ...this.state.ingredients };
        x[type] = uc;

        //get base price of [type]
        const p = ingredientPrices[type];

        //new price
        const np = Number((p + this.state.price).toFixed(2));

        this.setState({ ingredients: x, price: np });

    }

    remove = (type) => {
        //old count
        const oc = this.state.ingredients[type];
        //updated count
        const uc = oc - 1;
        //copy of OG ingredients
        const x = { ...this.state.ingredients };
        x[type] = uc;

        //get base price of [type]
        const p = ingredientPrices[type];

        //new price
        const np = Number((this.state.price - p).toFixed(2));

        this.setState({ ingredients: x, price: np });
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />

                <div className={classes.price}>
                    Total Price: {this.state.price} $
                </div>

                <BuildControls
                    ingredients={this.state.ingredients}
                    add={this.add}
                    remove={this.remove} />
            </Aux>
        );
    }
}

export default BurgerBuilder;