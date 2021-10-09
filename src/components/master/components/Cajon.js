import React from 'react';
import { Divider, Drawer,makeStyles } from '@material-ui/core';
import UserSidebar from './listas/UserSidebar';
import Logo from '../../../resources/logo_blue.svg';

const estilos = makeStyles(theme =>({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    Logo: {
        maxWidth: '60px'
    },
    toolbar: theme.mixins.toolbar
}));

function Cajon(props){
    const classes = estilos();
    return(
        <Drawer 
            className={classes.drawer} 
            classes={{paper: classes.drawerPaper}}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
            >
            <div className={classes.toolbar}></div>
            <div align="center">
            <img src={Logo} alt="" className={classes.Logo}/>
            </div>
            <UserSidebar clickLink={props.clickLink}/>
        </Drawer>
    )
}

export default Cajon;