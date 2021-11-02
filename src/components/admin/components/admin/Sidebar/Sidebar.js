import React from 'react';
import {Drawer,makeStyles } from '@material-ui/core';
import UserSidebar from './listas/UserSidebar';
import Logo from '../../../../../resources/logo_blue.svg';


function Sidebar(props){
    const estilos = makeStyles(theme =>({
        drawer: {
            width: props.width,
            flexShrink: 0,
        },
        drawerPaper: {
            width: props.width
        },
        Logo: {
            maxWidth: '60px'
        },
        toolbar: theme.mixins.toolbar,
        marginTop: {
            marginTop: "30px"
        }
    }));
    const classes = estilos();
    return(
        <Drawer 
            id={props.id}
            className={classes.drawer} 
            classes={{paper: classes.drawerPaper}}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
            >
            <div className={classes.marginTop} align="center">
            <img src={Logo} alt="" className={classes.Logo}/>
            </div>
            <UserSidebar clickLink={props.clickLink}/>
        </Drawer>
    )
}

export default Sidebar;