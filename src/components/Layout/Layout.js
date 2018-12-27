import React, { Component } from 'react';

//Aux
import Aux from '../../hoc/Auxi';

//css
import classes from './Layout.css';


//Toolbar
import Toolbar from './../Nav/Toolbar/Toolbar';


//SideDrawer
import SideDrawer from './../Nav/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        show: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ show: false })
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { show: !prevState.show }
        })
    };
    render() {

        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.show}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;