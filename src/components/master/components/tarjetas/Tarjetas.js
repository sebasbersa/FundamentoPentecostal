import React, { useState, useEffect } from 'react'
import Tarjeta from './Tarjeta'
import basePath from '../../../../config/serverConfig';


function Tarjetas(props) {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        consumeApiPosts();
    }, []);
    const consumeApiPosts = async () => {
        await fetch(basePath + "/posts", { method: "POST" }).then(async (res, err) => {
            setposts(await res.json());
        }).catch(() => {
            console.log("not conected");
        });
    };
    const cards = posts.slice(0, props.cantidad);
    const destacadas = cards.filter(function (card) {
        if (props.destacada) {
            return card.destacada
        } else {
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
