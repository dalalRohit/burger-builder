import React, { Component } from 'react';

//Aux
import Aux from '../../hoc/Auxi';

//css
import classes from './BurgerBuilder.css';

//BurgerIngredient
import Burger from './../../components/Burger/Burger';

//BuildControls
import BuildControls from '../../components/BuildControls/BuildControls';

//modal
import Modal from './../../components/UI/Modal/Modal';


//OrderSummary
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

//axios instance
import axios from './../../axios-orders';

//spinner
import Spinner from './../../components/UI/Spinner/Spinner';

//withErrorHandler
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

const ingredientPrices = {
    salad: 0.9,
    cheese: 0.6,
    meat: 0.5,
    bacon: 1
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        price: 5,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };
    componentDidMount() {
        axios.get('https://react-burger-42f06.firebaseio.com/ingredients.json')
            .then((res) => {
                this.setState({ ingredients: res.data });
            })
            .catch(err => {
                this.setState({ error: true })
            })
    }
    updatePurchasable = (ing) => {


        const s = Object.keys(ing).map((key) => {
            return ing[key];
        });
        let sum = s.reduce((cur, el) => cur + el);

        if (sum > 0) {
            this.setState({ purchasable: true });
        } else {
            this.setState({ purchasable: false });

        }
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

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
        this.updatePurchasable(x);

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
        this.updatePurchasable(x);
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    };
    purchaseBurger = () => {
        // alert('User wants to purchase!');
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: "Rohit Dalal",
                email: "test@gmail.com",
                country: 'INDIA'
            },
            method: 'fastest',

        }
        axios.post('/orders.json', order)
            .then((res) => {
                this.setState({ loading: false, purchasing: false });

                // console.log(res);
            })
            .catch((err) => {
                this.setState({ loading: false, purchasing: false });

                // console.log(err);
            });
    };

    render() {
        let orderSummary = null;
        let burger = this.state.error ? <p style={{ textAlign: 'center' }}>Ingredients can't be loaded from Firebase</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />

                    <div className={classes.price}>
                        Total Price: {this.state.price} $
                </div>

                    <BuildControls
                        ingredients={this.state.ingredients}
                        add={this.add}
                        remove={this.remove}
                        ordered={this.purchaseHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary
                continue={this.purchaseBurger}
                cancel={this.purchaseCancelHandler}
                ingredients={this.state.ingredients}
                price={this.state.price} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);