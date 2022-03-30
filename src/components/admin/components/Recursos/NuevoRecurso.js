import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Typography } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import axios from 'axios';
import basePath from '../../../../config/serverConfig';

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
  const [recurso, setRecurso] = useState({
    titulo: "",
    autor: "",
    descripcion: "",
    habilitado: true,
    url: ""
  })

  const handleTitle = (e)=>{
    setRecurso({...recurso, titulo: e.target.value});
  }
  const handleAutor = (e)=>{
    setRecurso({...recurso, autor: e.target.value})
  }
  const handleDescripcion = (e)=>{
      setRecurso({...recurso, descripcion: e.target.value});
  }
  async function subirDocumento(){
    const files = document.getElementById("fileUploadInput").files;
    if(files.length > 0){
      const data = new FormData();
      data.append('archivo', files[0]);
      axios.post(basePath + '/uploadDocument' , data)
      .then(res => {
          const path = res.data;
          setRecurso({...recurso, url: basePath + path});
          const newRecurso = recurso;
          newRecurso.url = path;
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRecurso)
          }
        fetch(basePath + "/insertRecurso", requestOptions).then(res => {
          window.location.href = "/admin/recursos";
        }); 
        }).catch(err => {console.log(err)});
    }
  }
  const handleFileUpload = (e) =>{
    const files = e.target.files;
    setNombreArchivo(files[0].name)
  }
  const handleGuardar = async () => {
    if(recurso.titulo.length <= 0){alert("Debe ingresar un titulo");}
    else if(recurso.autor.length <= 0){alert("Debe ingresar un autor");}
    else if(recurso.descripcion.length <= 0){alert("Debe ingresar una descripción");}
    else if(document.getElementById("fileUploadInput").files.length <= 0){
      alert("Debe ingresar un archivo");
    }
    else{
      await subirDocumento().then(() => {
        console.log(recurso);
      });
     
    }
  }
  const handleCancelar = () =>{
    window.location.href = "/admin/recursos";
  }
  return (
  <div>
  <h1>Subir nuevo recurso</h1>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="titulo" label="Titulo" onChange={handleTitle} />
      <TextField id="autor" label="Autor" onChange={handleAutor} />
      <br />
      <TextField 
          id="descripcion" 
          label="Descripción" 
          multiline
          maxRows={4}
          className={classes.multiline}
          onChange={handleDescripcion}
           />
      <br />
      <Button
        className={classes.button}
        variant="contained"
        component="label"
        color="primary"
      >Subir Documento<InsertDriveFileIcon/>
      <input id="fileUploadInput" type="file" hidden accept=".docx,.pdf" onChange={handleFileUpload}/>
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
