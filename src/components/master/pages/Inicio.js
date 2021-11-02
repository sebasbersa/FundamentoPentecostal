import React from 'react'
//import Carousel from '../components/carousel/Caousel';
import InicioHeadline from '../components/InicioHeadline/InicioHeadline';
import {makeStyles} from '@material-ui/core';
import './inicio.css';
import Tarjetas from '../components/tarjetas/Tarjetas';
import Entendiendo from '../components/inicioEntendiendo/Entendiendo';
// import articulos from '../../../utilities/articulos';


const estilos = makeStyles( (theme) => ({
    root: {
        display: 'block'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing(3)
    },
    div_info:{
        minHeight: "50vh",
        padding: theme.spacing(3),
        paddingTop: "0px",
        backgroundColor: "#142850f2"        
    },
    cards:{
        padding: theme.spacing(3),
    }

}))

// const __cards = articulos();

function Inicio() {
    const classes = estilos();

    const cards = []

    return (
        <div>
        <InicioHeadline />
            {/* <Carousel id="carouselInicio" images={images}/> */}
            <div className={classes.content}>
                <div id="div_info" >
                    <div className={classes.div_info}>
                        <Entendiendo/>
                    </div>
                </div>
            </div>
            <div className={classes.cards}>
                <h2 className="title c-primary">Recursos Destacados</h2>
                <br/>
                <Tarjetas cantidad={4} cards={cards} destacada={true} />
            </div>
        </div>
    )
}

export default Inicio
