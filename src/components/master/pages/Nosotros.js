import React from 'react'
import './nosotros.css';
import Study from '../../../resources/images/estudy.jpg'

function Nosotros(){
    return (
        <div>
            <div className="us-headline">
                <div className="us-headline__div" align="center">
                    <h5>
                        Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.
                    </h5>
                    <h5>
                        (2 Timoteo 2:15)
                    </h5>
                </div>
            </div>
            <div className="body row">
                <h1 className="body__title" align="center">NOSOTROS</h1>
                <p>
                    Fundamento Pentecostal existe para ayudar al pueblo pentecostal mediante la difusión de recursos basados en la Palabra de Dios, contribuyendo en su identidad, teología e historia. Promovemos tanto, una correcta interpretación del mensaje Bíblico, como su acertada aplicación para la vida de la persona, de la iglesia y de la sociedad, generando un espacio de enseñanza y reflexión para la capacitación del pueblo de Dios. 
                </p>
                <br/>
                <div className="col-md">
                    <br/>
                    <div align="center">
                    <h2>Misión</h2>
                    </div>
                    <br/>
                    <ol>
                        <li>
                            Contribuir con la formación de la identidad pentecostal, mediante el reconocimiento de las doctrinas fundamentales y características de este movimiento.
                        </li>
                        <li>
                            Aportar a las iglesias evangélicas y en particular a las iglesias pentecostales con recursos bíblicos, teológicos e históricos.                    </li>
                        <li>
                            Proporcionar una enseñanza bíblica, fundamentada en una correcta interpretación de La Palabra de Dios, fomentando el amor y respeto por las Sagradas Escrituras y el adecuado uso de ellas.
                        </li>
                        <li>
                            Promover un pensamiento cristiano fundamentado en la Biblia, para la aplicación y reflexión en temáticas contingentes de la vida pública. 
                        </li>
                    </ol>
                </div>
                <div className="col-md">
                    <div className="us-img__div" align="center">
                        <img alt="nosotros" src={Study} className="us-img__img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros
