import React from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const InputList = (props) => {
    const id = props.id;
    const item = props.content;
    const handleDelete = (event) => {
        props.onDeleteItem(id)
        event.preventDefault();
    }
    return (
        <li key={id} id={id}>{item}
            <IconButton onClick={handleDelete} color="secondary">
                <DeleteIcon/>
            </IconButton>
        </li>
    )
}

export default InputList;
