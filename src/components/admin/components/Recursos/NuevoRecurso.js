import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Typography } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: "10px"
  },
  multiline:{
    width: "450px !important",
    [theme.breakpoints.down('xs')]:{
      width: "100% !important"
    }
  },
  Archivo: {
    color: "red",
    margin: "10px"
  }
}));

function NuevoRecurso(){
  const classes = useStyles();
  const [nombreArchivo, setNombreArchivo] = useState("");

  const handleFileUpload = (e) =>{
    e.preventDefault();
    setNombreArchivo("archivo.pdf");
  }
  const handleGuardar = () => {
    console.log("guardar")
  }
  const handleCancelar = () =>{
    window.location.href = "/admin/recursos";
  }
  return (
  <div>
  <h1>Subir nuevo recurso</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="titulo" label="Titulo" />
      <TextField id="autor" label="Autor" />
      <br />
      <TextField 
          id="descripcion" 
          label="Descripción" 
          multiline
          maxRows={4}
          className={classes.multiline}
           />
      <br />
      <Button
        className={classes.button}
        variant="contained"
        component="label"
        color="primary"
      >Subir Documento<InsertDriveFileIcon/>
      <input type="file" hidden accept=".docx,.pdf" onChange={handleFileUpload} />
      </Button>
      <Typography 
        className={classes.Archivo}
        variant="p" 
        component="p">{nombreArchivo}</Typography>
    </form>
      <br />
      <Button
        className={classes.button}
        variant="contained"
        component="label"
        color="secondary" onClick={handleCancelar}>Cancelar</Button>
      <Button
        className={classes.button}
        variant="contained"
        component="label"
        color="primary"
        onClick={handleGuardar}>Guardar</Button>
  </div>
  );
};

export default NuevoRecurso;
