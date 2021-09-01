import React from 'react';
import '../../../styles/navbar.css'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Hidden } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import logo from "../../../resources/logo.svg";
import LinkRouter from './LinkRouter';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]:{
            display: 'none'
        }
    },
    title:{
        flexGrow: 1
    },
    appBar: {
        // [theme.breakpoints.up('md')]:{
        //     width: `calc(100% - ${240}px)`,
        //     marginLeft: 240
        // }
    },
    logo: {
        maxWidth: 45,
        marginRight: '10px',
        marginBottom: '10px'
      }
}))



function NavbarComponent(props){
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton 
                color="inherit" 
                aria-label="menu" 
                className={classes.menuButton}
                onClick={props.menuButton}>
                    <Menu />
                </IconButton>
                <img src={logo} alt="Logo fundamento pentecostal" className={classes.logo} />
                <Typography variant="h6" className={classes.title}>
                    Fundamento pentecostal
                </Typography>
                <Hidden smDown>
                <LinkRouter to='/' content={<Button variant="text" color="inherit" >Inicio</Button>}/>
                <LinkRouter to='/nosotros' content={<Button variant="text" color="inherit" >Nosotros</Button>}/>
                <LinkRouter to='/articulos' content={<Button variant="text" color="inherit" >Articulos</Button>}/>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
export default NavbarComponent;

