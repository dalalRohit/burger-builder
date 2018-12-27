import React from 'react'

import Logo from './../../Logo/Logo';
import NavItems from './../NavItems/NavItems';

//css
import classes from './SideDrawer.css'

//BackDrop
import BackDrop from './../../UI/Backdrop/Backdrop';

//Auxi
import Auxi from './../../../hoc/Auxi';

const sideDrawer = (props) => {
    let atc = [classes.SideDrawer, classes.Close];

    if (props.open) {
        atc = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxi>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={atc.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Auxi>

    )
};

export default sideDrawer;