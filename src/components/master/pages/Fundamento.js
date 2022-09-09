import React from 'react';
import Historia from '../../../resources/images/FP_Historia_2.jpg';
import Teologia from '../../../resources/images/FP_teologia_2.jpg';
import { makeStyles } from '@material-ui/core';
import cielo from '../../../resources/images/cielo.png';

const useStyles = makeStyles((theme) => ({
    fundamentoHeadline: {
        maxHeight: "60vh",
        height: "60vh",
        backgroundImage: "url(" + cielo+ ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center"
    },
    fundamentoHeadlineDiv: {
        background: "#142850aa",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        borderTop: "3px solid #ffffffaa",
        padding: "10px 60px",
        color: "white"
    },
    fundamentoIimages__image :{
        width: "250px",
        height: "180px",
        objectFit: "cover",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.6)",
        transition: "all 0.5s ease-in-out",
        borderRadius: "8px",
        "&:hover":{
            boxShadow: "2px 2px 6px #142850aa",
            transform: "scale(1.02)",
            filter: "brightness(0.9)"
        }
    },
    fundamentoLink: {
        color: "#142850",
        textDecoration: "underline #142850",
        marginBottom: "20px",
        fontWeight: "600",
        "&:hover": {
            color: "#142850aa",
            textDecoration: "underline #142850aa",
        }
    }
}))

function Fundamento() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.fundamentoHeadline}>
                <div className={classes.fundamentoHeadlineDiv} align="center">
                    <h5>
                    Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare. 
                    </h5>
                    <h5>
                    (Hechos 2:39)
                    </h5>
                </div>
            </div>
            <div className="body row">
                <h1 className="body__title" align="center">FUNDAMENTO PENTECOSTAL</h1>
                <p>Muchos evangélicos pentecostales, desconocen tanto la historia del movimiento como sus bases doctrinales. En Fundamento Pentecostal encontrará recursos que le proveerán de información correspondiente a las principales características del pentecostalismo. </p>
                <div className="col-md" align="center">
                <a href="/fundamento/historia">
                    <h3 className={classes.fundamentoLink}>Historia</h3>
                    <div className="fundamento-images">
                        <img alt="historia del pentecostalismo en chile" src={Historia} className={classes.fundamentoIimages__image} />
                    </div>
                </a>
                <br/>
                <p>Conozca la historia de la iglesia evangélica y en especial del movimiento pentecostal a través de sus diferentes procesos formativos. </p>
                </div>
                <div className="col-md" align="center">
                    <a href="/fundamento/teologia">
                        <h3 className={classes.fundamentoLink}>Teología</h3>
                        <div className="fundamento-images">
                            <img alt="bases de la teologia del pentecostalismo en chile" src={Teologia} className={classes.fundamentoIimages__image} />
                        </div>
                    </a>
                    <br/>
                    <p>Aprender la teología pentecostal le permitirá reconocer que características la distinguen de otros movimientos evangélicos, a la vez de fortalecer sus convicciones como pentecostal.</p>
                </div>
            </div>
        </div>
    )
}

export default Fundamento
