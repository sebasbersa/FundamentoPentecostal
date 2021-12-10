import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import Evaluar from '../../../../publicos/EvaluarArticulo';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const Contenido = (props) => {
    const id = props.id;
    const classes = props.classes;
    const objeto = props.contenido;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleDelete = (event) => {
        setOpen(false);
        props.handleDelete(id);
        event.preventDefault();
    }
    const onEditing = () =>{
      props.onEdit(id, objeto);
    }
    const handleClickUp = () =>{
      props.handleClickUp(id);
    }
    return (
        <div className={classes.container}>
        <Evaluar contenido={objeto}/>
        <IconButton aria-label="edit" onClick={onEditing}>
            <EditIcon color="primary" />
        </IconButton>  
        <IconButton aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon color="secondary" />
        </IconButton>  
        <IconButton aria-label="subir" onClick={handleClickUp}>
            <ArrowDropUpIcon color="primary" />
        </IconButton>  
        <Dialogo open={open} 
        handleClose={handleClose} 
        handleDelete={handleDelete}
        />
    </div>
    )   
}

function Dialogo(props){
 return (
    <Dialog
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"¿Estás seguro de eliminar?"}</DialogTitle>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        Cancelar
      </Button>
      <Button onClick={props.handleDelete} color="primary" autoFocus>
        Aceptar
      </Button>
    </DialogActions>
  </Dialog>
 )
}
export default Contenido
