import React, {useState, useEffect} from 'react'
import Tarjeta from './Tarjeta'
import "./tarjetas.css"

function Tarjetas(props) {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, [])
    const consumeApiPosts = async() => {
        const response = await fetch("http://localhost:3500/posts", {method: "POST"})
        const responseJson = await response.json();
        console.log(responseJson);
        setposts(responseJson)
    };
    const cards = posts.slice(0,props.cantidad);
    const destacadas = cards.filter(function(card){
        if (props.destacada){
            return card.destacada
        }else{
            return card
        }
    });

    return (
        <div className="row" align="center">
            {destacadas.map((card, index) => {
                return (
                    <div key={index} className="col-md-3">
                        <Tarjeta 
                            id={card.id}
                            imagen={card.imagen} 
                            imageTitle={card.imageTitle}
                            titulo={card.titulo}
                            descripcion={card.descripcion}
                            path={card.path}
                            />
                    </div>
                    )
            })
            
            
            
            }
        </div>
    )
}

export default Tarjetas
