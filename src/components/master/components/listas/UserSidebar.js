import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import './userSidebar.css';
import LinkRouter from '../LinkRouter';
import {Divider, makeStyles} from '@material-ui/core';
import routes from '../../routes';

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
                {routes.map((ruta) => (
                    <LinkRouter to={ruta.path} content={
                        <ListItem  onClick={props.clickLink}  button>
                        <ListItemIcon>
                            {<ruta.icon className={classes.icons}/>}
                        </ListItemIcon>
                        <ListItemText className={classes.links} primary={" " + ruta.name} />
                        </ListItem>}
                    />
                ))}
{/* 

                <LinkRouter to="/" content={<ListItem  onClick={props.clickLink}  button>
                    <ListItemIcon>
                        <HomeIcon className={classes.icons} />
                    </ListItemIcon>
                    <ListItemText className={classes.links} primary=" Inicio" />
                    </ListItem>}
                />
                <LinkRouter to="/fundamento" content={<ListItem  onClick={props.clickLink} button>
                    <ListItemIcon>
                        <BookIcon className={classes.icons}/>
                    </ListItemIcon>
                    <ListItemText className={classes.links} primary=" Fundamento" />
                </ListItem>}/>
                <LinkRouter to="/nosotros" content={<ListItem  onClick={props.clickLink} button>
                    <ListItemIcon>
                        <PeopleAltIcon className={classes.icons}/>
                    </ListItemIcon>
                    <ListItemText className={classes.links} primary=" Nosotros" />
                </ListItem>}/>
                <LinkRouter to="/articulos" content={<ListItem onClick={props.clickLink}  button>
                    <ListItemIcon>
                        <DescriptionIcon className={classes.icons}/>
                    </ListItemIcon>
                    <ListItemText className={classes.links} primary=" Articulos" /> 
                </ListItem>}/> */}
            </List>
        </div>
    )
}
export default UserSidebar;