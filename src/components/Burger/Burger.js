import React from 'react';

//css
import classes from './Burger.css'

//BurgerIngredient
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //IMPORTANT AS HELL..................
    let ti = Object.keys(props.ingredients)
        .map((igk) => {
            return [...Array(props.ingredients[igk])]
                .map((_, index) => {
                    return <BurgerIngredient key={igk + index} type={igk} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    // console.log(ti);
    if (ti.length === 0) {
        ti = <p>Add INGREDIENTS</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ti}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;