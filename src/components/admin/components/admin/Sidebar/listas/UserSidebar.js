import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './userSidebar.css';
import LinkRouter from '../../navbar/LinkRouter';
import {Divider, makeStyles} from '@material-ui/core';
import routes from '../../../../routes';

const estilos = makeStyles( (theme) => ({
    links: {
        color: '#142850'
    },
    icons: {
        color: '#142850'
    }
}))

function UserSidebar(props){
    const classes = estilos();

    return (
        <div>
            <List component="nav">
                <br/>
                <Divider/>
                {routes.map((ruta, index) => (
                    ruta.nav === true ? 
                    <LinkRouter key={index} to={ruta.path} content={
                        <ListItem  onClick={props.clickLink}  button>
                        <ListItemIcon>
                            {<ruta.icon className={classes.icons}/>}
                        </ListItemIcon>
                        <ListItemText className={classes.links} primary={" " + ruta.name} />
                        </ListItem>}
                    /> : null
                ))}
            </List>
        </div>
    )
}
export default UserSidebar;