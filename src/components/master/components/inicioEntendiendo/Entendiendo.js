import React from 'react'
import "./entendiendo.css"

function Entendiendo(){

    return (
        <div>
            <div className="row div_entendiendo">
                <div className="col-lg-4" align="center">
                    <div id="div_entendiendo_image" align="center">
                        <div className="entendiendoTexts" align="center">
                            <h5>Entendiendo uno dos</h5>
                            <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, used diam nonummy nibh euismod tinci</p>
                        </div>
                    </div>
                    <div id="div_entendiendo_image_after" align="center"></div>
                </div>
                <div className="col-lg-8" align="center">
                    <div className="entendiendoTexts2">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit </p>
                        <a className="entendiendo_link" href="/articulos">Revisa nuestros articulos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entendiendo
