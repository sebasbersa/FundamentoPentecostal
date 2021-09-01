import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DescriptionIcon from '@material-ui/icons/Description';
import './userSidebar.css';
import LinkRouter from '../LinkRouter';

function UserSidebar(props){

    return (
        <div>
            <List component="nav">
                <LinkRouter to="/" content={<ListItem  onClick={props.clickLink}  button>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary=" Inicio" />
                </ListItem>}/>
                <LinkRouter to="/nosotros" content={<ListItem  onClick={props.clickLink} button>
                    <ListItemIcon>
                        <PeopleAltIcon/>
                    </ListItemIcon>
                    <ListItemText primary=" Nosotros" />
                </ListItem>}/>
                <LinkRouter to="/articulos" content={<ListItem onClick={props.clickLink}  button>
                    <ListItemIcon>
                        <DescriptionIcon/>
                    </ListItemIcon>
                    <ListItemText primary=" Articulos" /> 
                </ListItem>}/>
            </List>
        </div>
    )
}
export default UserSidebar;