import React, {useState} from 'react';
import {Button, Fab, makeStyles, TextField,FormControl, 
    Select,MenuItem, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Contenido from '../components/articles/createArticle/Contenido';
import DialogoCreate from '../components/articles/createArticle/DialogoCreate';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 120,
      },
    container: {
        border: "2px dashed #aaa",
        margin: "10px"
    },
    dialog: {
        width: "100%",
        height: "100%",
    },
    dialogContentWidth:{
        width: "700px",
    }
  }));

const CrearArticulo = () =>{
    const classes = useStyles();
    const [contenido, setContenido] = useState([
        {type: "subtitulo", contenido: "El nuevo testamento"},
        {type: "parrafo", contenido: "El nuevo testamento parrafo 1"},
        {type: "lista ordenada", contenido: ["uno", "dos"]}
        ]);
    const submitButton = (e) => {
        console.log(articulo)
        // e.preventDefault();
        // const formData = new FormData();
        // for (let i in  articulo){
        //     formData.append(`${i}`, `${articulo[i]}`);
        // }
        // axios.post('http://localhost:3500/prueba', formData)
        //     .then(res => {console.log(res)})
        //     .catch(err => {console.log(err)})
    }
    const [articulo, setArticulo] = useState({
        titulo: "",
        Descripcion: "",
        destacada: false,
        contenido: [],
        autor: "",
        habilitado: true,
        categoria: "",
        imagen: "",
        imageTitle: "",
        path: "",
        });
    const handleChangeTitle = (event) => {
        setArticulo({...articulo, titulo: event.target.value});
    }
    const [category, setCategory] = useState(1);
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        setArticulo({...articulo, categoria: categorias[event.target.value].categoria})
    }

    //IMAGE
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUploadImage = e => {
        const files = e.target.files;
        //console.log(files[0].name)
        const data = new FormData();
        data.append('image', files[0]);
        axios.post('http://localhost:3500/upload', data)
            .then(res => {
                const path = res.data.path;
                setArticulo({...articulo, imagen: path});
            })
            .catch(err => {console.log(err)});
    }
    // DIALOG ----------
    const [addingDialog, setAddingDialog] = useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleAdding =() =>{
        setIndexDialog(-1);
        setEditingObject({});
        setAddingDialog(true);
        setOpenDialog(true);
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const [editingObject, setEditingObject] = useState({})
    const [indexDialog, setIndexDialog] = useState(0);
    const handleEditing = (index, objeto) =>{
        setIndexDialog(index);
        setAddingDialog(false);
        setEditingObject(objeto);
        setOpenDialog(true);
    };
    // DIALOG ----------
    const addNewContent = (newContent)=>{
        setContenido((prev) =>{
            return [...prev, newContent]
        });
        setOpenDialog(false);
    }
    
    const editContent = (editedContent, index) =>{
        let newContenido = contenido;
        newContenido[index] = editedContent;
        setContenido(newContenido);
        setOpenDialog(false);
    }
    const handleDelete = (id) => {
        setContenido( (prevItems) => {
            return prevItems.filter( (item, index) => {
                return index !== id
            });
        });
    }    

    const categorias = [
        {value: 1, categoria: "Teología"},
        {value: 2, categoria: "Historia"},
        {value: 3, categoria: "Pentecostalismo"}
    ]
    
    const tipos = [
        {value: "subtitulo", nombre: "Subtitulo"},
        {value: "parrafo", nombre: "Parrafo"}, 
        {value: "lista ordenada", nombre: "Lista con numeros"}, 
        {value: "lista desordenada", nombre: "Lista con puntos" }, 
        {value: "img", nombre: "Imagen" }
    ]
    return (
        <div><h1>Nuevo Articulo</h1>
        <button type="button" onClick={submitButton}>articulo</button>
        <hr />
            <form className={classes.root} noValidate autoComplete="off">                
                <TextField id="standard-basic" label="Titulo" onChange={handleChangeTitle} />
                <TextField
                    id="standard-multiline-static"
                    label="Autor"
                    />
                <FormControl className={classes.formControl}>
                <InputLabel id="select-category">Categoría</InputLabel>
                <Select labelId="select-category"
                    id="select-category"
                    value={category}
                    onChange={handleChangeCategory}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {categorias.map((objeto, index)=>{
                        return(<MenuItem key={index} value={objeto.value}>{objeto.categoria}</MenuItem>)
                    })}
                    
                </Select>
                </FormControl>
                <h4>Subir una imagen</h4>
                <input type='file'
                    name='imagen'
                    placeholder='Subir una imagen...'
                    onChange={handleUploadImage}
                    /> 

                <br/>
                <TextField
                    id="standard-multiline-static"
                    label="Descripción"
                    multiline
                    rows={2}
                    />
            </form>
            {contenido.map((objeto, index) => {
                return (
                    <Contenido key={index}
                    onEdit={handleEditing}
                    id={index} 
                    classes={classes} 
                    contenido={objeto}
                    handleDelete={handleDelete}
                    />
                   )
            })}
            <Fab color="secondary" aria-label="add" onClick={handleAdding}>
                <AddIcon />
            </Fab>
            {/* DIALOGO -> */}
            <DialogoCreate 
            adding={addingDialog}
            open={openDialog}
            tipos={tipos} 
            classes={classes}   
            agregar={addNewContent}
            onClose={handleCloseDialog}
            editar={editContent}
            index={indexDialog}
            editingObject={editingObject}
            />
        </div>
    )
}

export default CrearArticulo;
