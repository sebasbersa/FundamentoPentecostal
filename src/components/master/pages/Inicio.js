import React from 'react'
//import Carousel from '../components/carousel/Caousel';
import InicioHeadline from '../components/InicioHeadline/InicioHeadline';
import {makeStyles} from '@material-ui/core';
import './inicio.css';
import Tarjetas from '../components/tarjetas/Tarjetas';
import Entendiendo from '../components/inicioEntendiendo/Entendiendo';


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
const images=[
    {
        id: '1',
        title: 'Fundamento Pentecostal',
        image: 'https://laopinion.com/wp-content/uploads/sites/3/2020/12/pexels-wendy-van-zyl-1112048.jpg?quality=80&strip=all&w=1200',
        text: 'lorem ipsum 1 lorem ipsum 1 lorem ipsum 1 lorem ipsum 1 lorem ipsum 1 lorem ipsum 1 ',
        buttonText: 'Saber más',
        side: 'center',
        light: 'light'
    },
    {
        id: '2',
        title: 'Las nuevas maravillas de Dios',
        image: 'https://dg.imgix.net/the-most-repeated-verse-in-the-bible-wfq9puhm-en/landscape/the-most-repeated-verse-in-the-bible-wfq9puhm-2c238cf97d4c72a4be85c9d86448d20e.jpg?ts=1538421135&ixlib=rails-4.2.0&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR',
        text: 'lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 ',
        buttonText: 'Saber más',
        side: 'right'
    },
    {
        id: '3',
        title: 'HEADLINE 3',
        image: 'https://cdn.pixabay.com/photo/2016/03/10/10/28/banner-1248181_960_720.jpg',
        text: 'lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 lorem ipsum 2 ',
        buttonText: 'Saber más',
        side: 'left',
        light: 'light'
    }
]

function Inicio() {
    const classes = estilos();
    
    
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
                <Tarjetas cantidad={4}/>
            </div>
        </div>
    )
}

export default Inicio
