import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import logo from '../../../resources/logo.svg';
import routes from '../routes';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: "white",
        padding: "2rem",
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    icons: {
        color: "white"
    },
    link: {
        color: "white",
        textDecoration: "none",
        "&:hover": {
            color: "#ffffffaa"
        }
    },
    logo: {
        maxWidth: 45,
        verticalAlign: "top",
        marginRight: "10px",
      },
    titleText:{
        color: "#ffffff",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    },
    center: {
        textAlign: "center"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid container spacing={3}>
            <Grid item xs={12} className={classes.center}>
                <img src={logo} className={classes.logo}/>
                <Typography className={classes.titleText}>Fundamento Pentecostal</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
                {
                    routes.map((ruta) => {
                        if (ruta.nav) {
                            return (
                                <Grid item xs={2} className={classes.center}>
                                    <ListItem>
                                        <a href={ruta.path} className={classes.link}>
                                            <ListItemText primary={ruta.name} />
                                        </a>
                                    </ListItem>
                                </Grid>
                            )
                        }
                    })
                }
            <Grid item xs={1}></Grid>
            </Grid>
        </div>
    )
}

export default Footer;