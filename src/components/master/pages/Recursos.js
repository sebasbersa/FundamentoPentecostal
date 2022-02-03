import React, {useEffect,useState} from 'react'
import './recursos.css';
import basePath from '../../../config/serverConfig';
import ResourcesList from '../components/recursos/ResourcesList';


function Recursos(){
    const [documentos, setDocumentos] = useState([])
    useEffect(() => {
        consumeApiPosts();
    }, []);
    const consumeApiPosts = async() => {
        await fetch(basePath + "/obtenerRecursos", {method: "POST"}).then(async ( res, err) => {
            const newDocuments = await res.json();
            setDocumentos(newDocuments);
        }).catch(()=>{
            console.log("not conected");
        });
    };
    return (
        <div>
            {/* <div className="recursos-headline">
                <div className="recursos-headline__div" align="center">
                    <h8>
                    Porque todo lo que fue escrito en tiempos pasados, para nuestra enseñanza se escribió, a fin de que por medio de la paciencia y del consuelo de las Escrituras tengamos esperanza.</h8>
                    <p>
                        (Romanos 15:4)
                    </p>
                </div>
            </div> */}
            <div className="body">
                <h1 className="body__title" align="center">RECURSOS</h1>
                <p>Bienvenido al centro de recursos donde encontrarás ensayos, documentos, y trabajos que te serán de mucha utilidad. Todos los documentos los podrás descargar gratuítamente.</p>
            <ResourcesList documentos={documentos} />
            </div>
        </div>
    )
}

export default Recursos
