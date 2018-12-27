import React from 'react'

//css
import classes from './Toolbar.css';

//logo
import Logo from './../../Logo/Logo';

//NavItems
import NavItems from './../NavItems/NavItems';

//DrawerToggle
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle click={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavItems />
            </nav>
        </header>
    );
};

export default toolbar;