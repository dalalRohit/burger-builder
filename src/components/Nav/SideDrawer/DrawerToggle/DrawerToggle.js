import React from 'react';
import Icon from '@material-ui/core/Icon';
const drawerToggle = (props) => {
    return (
        <div onClick={props.click}>
            <Icon>menu</Icon>
        </div>
    )
};

export default drawerToggle;