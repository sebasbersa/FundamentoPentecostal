import React from 'react'
import './nosotros.css';
import Study from '../../../resources/images/estudy.jpg'

function Nosotros(){
    return (
        <div>
            <div className="us-headline">
                <div className="us-headline__div" align="center">
                    <h8>
                        Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.
                    </h8>
                    <p>
                        (2 Timoteo 2:15)
                    </p>
                </div>
            </div>
            <div className="us-body row">
                <h6>
                    Fundamento Pentecostal existe para ayudar al pueblo pentecostal mediante la difusión de recursos basados en la Palabra de Dios, contribuyendo en su identidad, teología e historia. Promovemos tanto, una correcta interpretación del mensaje Bíblico, como su acertada aplicación para la vida de la persona, de la iglesia y de la sociedad, generando un espacio de enseñanza y reflexión para la capacitación del pueblo de Dios. 
                </h6>
                <br/>
                <div className="col-6">
                    <br/>
                    <div align="center">
                    <h2>Misión.</h2>
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
                <div className="col-6">
                    <div className="us-img__div" align="center">
                        <img src={Study} className="us-img__img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros
