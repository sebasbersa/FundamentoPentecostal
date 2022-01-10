import React, {useState, useEffect} from 'react';
import {Button, Fab, makeStyles, TextField,FormControl, 
    Select,MenuItem, InputLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Contenido from '../components/articles/createArticle/Contenido';
import DialogoCreate from '../components/articles/createArticle/DialogoCreate';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import foto from '../../../resources/images/empty.png';
import basePath from '../../../config/serverConfig';

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
    },
    fotoClassDiv:{
        width: "100%",
        textAlign: "center",
    },
    fotoClass:{
        height: "300px",
        width: "80%",
        objectFit: "cover",
        cursor: "pointer",
        boxShadow: "2px 2px 10px #00000088",
        borderRadius: "10px",
        "&:hover": {
            filter: "brightness(0.6)"
        }
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
    //CATEGORIA
    const [category, setCategory] = useState("");
    const handleChangeCategory = (event) => {
        const IdCategoria = event.target.value;
        setCategory(IdCategoria);
        if(IdCategoria >= 1){
            setArticulo({...articulo, categoria: categorias[IdCategoria - 1].categoria})
        }else{
            setArticulo({...articulo, categoria: ""})
        }
    }
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        ObtenerCategorias();
    }, []);
    const ObtenerCategorias = async() => {
        await fetch(basePath + "/ObtenerCategorias", {method: "POST"}).then(async ( res, err) => {
            setCategorias(await res.json());
        }).catch(()=>{
            console.log("not conected");
        });
    };
    const CrearNuevaCategoria = async() => {
        const nuevaCategoria = prompt("Nombre nueva categoría:")
        const cuerpo = {categoria: nuevaCategoria}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cuerpo)
        };
        await fetch(basePath + "/nuevaCategoria", requestOptions);   
        ObtenerCategorias();     
    }
    //AUTOR
    const [autor, setAutor] = useState("");
    const handleChangeAutor = (event) => {
        setAutor(event.target.value)
        setArticulo({...articulo, autor: event.target.value})
    }
    //IMAGE
    const [image, setImage] = useState('');

    const handleUploadImage = e => {
        const files = e.target.files;
        if(files.length > 0){
            const data = new FormData();
            data.append('image', files[0]);
            axios.post(basePath + '/upload' , data)
                .then(res => {
                    const path = res.data;
                    setArticulo({...articulo, imagen: path});
                    setImage(basePath + path);
                })
                .catch(err => {console.log(err)});
        }
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
    //metodo que sube el contenido de indice
    const handleClickUp = (index) => {
        const newContenido = [];
        for (let i = 0; i<contenido.length; i++){
            if(i === index - 1){
                newContenido.push(contenido[index]);
            }
            else if(i === index){
                newContenido.push(contenido[index-1]);
            }
            else{
                newContenido.push(contenido[i]);
            }   
        }
        setContenido(newContenido);

    }
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
                <div className={classes.fotoClassDiv}>
                    <img 
                    src={image ? image : foto} 
                    className={classes.fotoClass}
                    onClick={()=>{document.getElementById("imagenArticulo").click()}}
                    />
                </div>
                <br/>
                <div style={{visibility: "hidden"}}>
                <input type='file'
                    id="imagenArticulo"
                    name='imagen'
                    placeholder='Subir una imagen...'
                    onChange={handleUploadImage}
                    /></div>
                <hr/>
                <div className="row">
                    <div className="col-md">
                        <TextField id="standard-basic" label="Titulo" onChange={handleChangeTitle} />
                    </div>
                    <div className="col-md">
                        <TextField
                        id="standard-multiline-static"
                        label="Autor"
                        value={autor}
                        onChange={handleChangeAutor}
                        />
                    </div>
                    <div className="col-md">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="select-category">Categoría</InputLabel>
                            <Select labelId="select-category"
                            id="select-category"
                            value={category}
                            onChange={handleChangeCategory}
                            >
                            <MenuItem value={0}>
                                <em>None</em>
                            </MenuItem>
                            {categorias.map((objeto, index)=>{
                                return(<MenuItem key={index} value={objeto._id}>{objeto.categoria}</MenuItem>)
                            })}
                            <MenuItem>
                                <em onClick={CrearNuevaCategoria}>Nueva categoría</em>
                            </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>                   
                <div className="row">
                    <div className="col-md">
                        <TextField
                        id="standard-multiline-static"
                        label="Descripción"
                        multiline
                        rows={3}
                        />
                    </div>
                </div>
            </form>
            <hr />
            {contenido.map((objeto, index) => {
                return (
                    <Contenido key={index}
                    onEdit={handleEditing}
                    id={index} 
                    classes={classes} 
                    contenido={objeto}
                    handleDelete={handleDelete}
                    handleClickUp={handleClickUp}
                    />
                   )
            })}
            <div align="center">
                <Fab color="secondary" aria-label="add" onClick={handleAdding}>
                    <AddIcon />
                </Fab>
            </div>
            <hr/>
            <button className='btn btn-danger'>Cancelar</button>
            <button className='btn btn-primary'>Guardar</button>
            
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
