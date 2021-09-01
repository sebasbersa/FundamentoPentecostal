import React from 'react';
import {NavLink} from 'react-router-dom';
import './LinkRouter.css';

function LinkRouter(props){
    return (
        <NavLink className="link" to={props.to} activeClassName="link-active" exact>
            {props.content}
        </NavLink>
    )
}

export default LinkRouter