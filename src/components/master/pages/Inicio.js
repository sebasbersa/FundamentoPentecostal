import React from 'react'
//import Carousel from '../components/carousel/Caousel';
import InicioHeadline from '../components/InicioHeadline/InicioHeadline';
import { makeStyles } from '@material-ui/core';
import Tarjetas from '../components/tarjetas/Tarjetas';
import Entendiendo from '../components/inicioEntendiendo/Entendiendo';
import sand from '../../../resources/images/sand.jpg'
import ContactForm from '../components/forms/ContactForm';

// import articulos from '../../../utilities/articulos';


const estilos = makeStyles((theme) => ({
    root: {
        display: 'block'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing(3)
    },
    div_info: {
        minHeight: "50vh",
        padding: theme.spacing(3),
        paddingTop: "0px",
        backgroundColor: "#142850f2"
    },
    cards: {
        padding: theme.spacing(3),
    },
    divInfo: {
        backgroundImage: "url(" + sand + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
    },
    title: {
        textAlign: "center",
        color: "#142850"
    }

}))

// const __cards = articulos();

function Inicio() {
    const classes = estilos();

    const cards = []

    return (
        <div>
            <InicioHeadline />
            <div className={classes.content}>
                <div className={classes.divInfo} >
                    <div className={classes.div_info}>
                        <Entendiendo />
                    </div>
                </div>
            </div>
            <div className={classes.cards}>
                <h2 className={classes.title}>Recursos Destacados</h2>
                <br />
                <Tarjetas cantidad={4} cards={cards} destacada={true} />
            </div>
            <div>
                <h2 className={classes.title}>Queremos saber de ti</h2>
                
            </div>
        </div>
    )
}

export default Inicio
