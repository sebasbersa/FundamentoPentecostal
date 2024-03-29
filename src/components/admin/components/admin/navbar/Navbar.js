import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Hidden, Link } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar(props){
    const useStyles = makeStyles(theme => ({
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]:{
                display: 'none'
            }
        },
        title:{
            flexGrow: 1,
        },
        titleText:{
            color: "#ffffff",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            "&:hover":{
                color: "#fff",
                opacity: "0.9",
                textDecoration: "none",
            },
        },
        appBar: {
            marginLeft: props.sidebarWidth,
            zIndex: 1,
            height: "65px",
            width: `calc(100vw - ${props.sidebarWidth}px)`
        },
    }))
    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }

    const classes = useStyles();
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return (
        <div>
        <HideOnScroll>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden >
                    <IconButton 
                    color="inherit" 
                    aria-label="menu" 
                    className={classes.menuButton}
                    onClick={props.menuButton}>
                    <Menu />
                    </IconButton>
                </Hidden>
                
                <Typography variant="h6" className={classes.title}>
                 <Link href="/" target="_blank" className={classes.titleText}>
                    Fundamento Pentecostal
                    </Link>
                </Typography>
                <div>
                    <Button color="inherit" onClick={logout}>Salir
                        <IconButton color="inherit" ><ExitToAppIcon/></IconButton>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
        </HideOnScroll>
        </div>
    )
}
export default Navbar;

