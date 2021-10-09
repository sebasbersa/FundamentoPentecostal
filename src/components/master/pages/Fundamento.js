import React from 'react';
import './fundamento.css';
import Historia from '../../../resources/images/hoover.jpg';
import Teologia from '../../../resources/images/biblialupa.jpg';

function Fundamento() {
    return (
        <div>
            <div className="fundamento-headline">
                <div className="fundamento-headline__div" align="center">
                    <h8>
                    Porque todo lo que fue escrito en tiempos pasados, para nuestra enseñanza se escribió, a fin de que por medio de la paciencia y del consuelo de las Escrituras tengamos esperanza.                   </h8>
                    <p>
                        (Romanos 15:4)
                    </p>
                </div>
            </div>
            <div className="body row">
                <h1 className="body__title" align="center">FUNDAMENTO PENTECOSTAL</h1>
                <p>Muchos evangélicos pentecostales, desconocen tanto la historia del movimiento como sus bases doctrinales. En Fundamento Pentecostal encontrará recursos que le ayudarán y proveerán para que descubra las principales características del pentecostalismo. </p>
                <div className="col-md" align="center">
                <a href="#">
                    <h3 className="fundamentos-link">Historia</h3>
                    <div className="fundamento-images">
                        <img src={Historia} className="fundamento-images__image" />
                    </div>
                </a>
                </div>
                <div className="col-md" align="center">
                    <a href="#">
                        <h3 className="fundamentos-link">Teología</h3>
                        <div className="fundamento-images">
                            <img src={Teologia} className="fundamento-images__image" />
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Fundamento
