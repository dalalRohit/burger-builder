import React from 'react'

//css
import classes from './NavItems.css';


//NavItem
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/" >Checkout</NavItem>
        </ul>
    );
};

export default navItems;