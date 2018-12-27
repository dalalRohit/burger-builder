import React from 'react'

//img
import logo from './../../assets/images/logo.png';

//css
import classes from './Logo.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={logo} alt="MyBurger" />
        </div>
    );
};

export default Logo;