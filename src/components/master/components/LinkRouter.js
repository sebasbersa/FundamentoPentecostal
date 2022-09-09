import { makeStyles } from '@material-ui/core';
import React from 'react';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        color: "inherit",
        textDecoration: "none",
        "&:hover":{
            color: "inherit"
        }
    },
    linkActive: {
        backgroundColor: "#ffffff11"
    }
}))

function LinkRouter(props){
    const classes = useStyles();
    return (
        <NavLink className={classes.link} to={props.to} activeClassName={classes.linkActive} exact>
            {props.content}
        </NavLink>
    )
}

export default LinkRouter