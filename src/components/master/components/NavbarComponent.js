import React from 'react';
import '../../../styles/navbar.css'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Hidden, Link } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import logo from "../../../resources/logo.svg";
import LinkRouter from './LinkRouter';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import routes from '../routes';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]:{
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
        zIndex: 1,
        height: "65px"
    },
    logo2: {
        maxWidth: 45,
        verticalAlign: "top",
        marginRight: "10px",
        // marginBottom: "10px"
      },
    titleicon: {
        display: "inline"
    },
    logo: {
        position: "absolute",
        top: "10px",
        left: "calc(50% - 25px)",
        maxWidth: 45
      },
    
    logoSvg: {
        position: "absolute",
        top: "0px",
        left: "calc(50% - 55px)",
        width: "100px",
        height: "85px",
        filter: "drop-shadow(3px 3px 2px rgb(0 0 0 / 0.4))"
    }
}))

function NavbarComponent(props){
    
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
    return (
        <div>
        <HideOnScroll>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton 
                color="inherit" 
                aria-label="menu" 
                className={classes.menuButton}
                onClick={props.menuButton}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>  
                <div className={classes.titleicon}>
                    <Link href="/" >
                            <img src={logo} alt="Logo fundamento pentecostal" className={classes.logo2} />
                    </Link>
                </div>
                   
                    <Link href="/" className={classes.titleText}>
                        Fundamento Pentecostal
                    </Link>
                    
                </Typography>
                <Hidden smDown>
                    {routes.map((ruta, index) => (
                        ruta.nav ? 
                        <LinkRouter key={index} to={ruta.path} content={<Button variant="text" color="inherit">{ruta.name}</Button>}/>
                        : null
                    ))}
                </Hidden>
            </Toolbar>
        </AppBar>
        </HideOnScroll>

        </div>
    )
}
export default NavbarComponent;

