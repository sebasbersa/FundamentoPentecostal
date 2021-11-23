import React, {useState, useEffect} from 'react';
import { FormControl, 
    Select,MenuItem, Button, InputLabel } from '@material-ui/core';
import EvaluarCreate from './EvaluarCreate';
import NuevoContenido from './NuevoContenido';
import {Dialog, DialogTitle,DialogContent,DialogActions  } from '@material-ui/core'; 

function DialogoCreate(props) {
    const classes = props.classes;
    const tipos = props.tipos;
    const [newType, setnewType] = useState("");
    const [newContent, setnewContent] = useState({});
    const handleNewType = (event) => {
        setnewType(event.target.value);
        setnewContent({type: event.target.value, contenido: newContent.contenido})
    }
    const handleSetContent = (contenido) =>{
        setnewContent({type: newType, contenido: contenido});
    }
    const adding = props.adding;

    const addNewContent = () => {
        if(newContent.contenido.length > 0){
            if(props.adding){
                props.agregar(newContent);  
                setnewType("");
            }else{
                props.editar(newContent, props.index);  
                setnewType("");
            }
        }
    }
    const handleClose = () =>{
        props.onClose();
        setnewType("");
    }
    //Editing props
    useEffect(() => {
        if(!adding){
            setnewType(props.editingObject.type);
            setnewContent({type: props.editingObject.type, contenido: props.editingObject.contenido});
        }else{
            setnewType("");
            setnewContent({});
        }
    },[props.open]);

    return(
    <div>
    <Dialog open={props.open} className={classes.dialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Seleccione lo que quiere agregar</DialogTitle>
            <DialogContent>
            <div className={classes.dialogContentWidth}></div>
            <FormControl className={classes.formControl}>
            <InputLabel id="tipo-label">Tipo</InputLabel>
            <Select labelId="tipo-label"
            id="demo-simple-select"
            value={newType}
            onChange={handleNewType}
            >
            <MenuItem key="0" value="">
                <em>None</em>
            </MenuItem>
                {tipos.map((objeto, index)=>{
                return(<MenuItem key={index} value={objeto.value}>{objeto.nombre}</MenuItem>)
                })}
            </Select>
            </FormControl>
            <br/>
            <NuevoContenido estado={props.open} type={newType} cambio={handleSetContent} adding={adding} editingObject={props.editingObject} />
            <br/>
            {newType ? <EvaluarCreate contenido={newType} /> : null}
            </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={addNewContent} color="primary">
                {adding ? "Agregar" : "Aceptar"}
            </Button>
        </DialogActions>
    </Dialog>
    </div>
    )
}

export default DialogoCreate;