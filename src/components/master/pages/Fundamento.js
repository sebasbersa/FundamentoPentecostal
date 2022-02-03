import React from 'react';
import './fundamento.css';
import Historia from '../../../resources/images/FP_Historia_2.jpg';
import Teologia from '../../../resources/images/FP_teologia_2.jpg';

function Fundamento() {
    return (
        <div>
            <div className="fundamento-headline">
                <div className="fundamento-headline__div" align="center">
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
                    <h3 className="fundamentos-link">Historia</h3>
                    <div className="fundamento-images">
                        <img alt="historia" src={Historia} className="fundamento-images__image" />
                    </div>
                </a>
                <br/>
                <p>Conozca la historia de la iglesia evangélica y en especial del movimiento pentecostal a través de sus diferentes procesos formativos. </p>
                </div>
                <div className="col-md" align="center">
                    <a href="/fundamento/teologia">
                        <h3 className="fundamentos-link">Teología</h3>
                        <div className="fundamento-images">
                            <img alt="teologia" src={Teologia} className="fundamento-images__image" />
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
