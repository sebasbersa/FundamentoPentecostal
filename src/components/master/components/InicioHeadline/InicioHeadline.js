import React from 'react';
import './inicioheadline.css';
import VideoBackground from "../../../../resources/videos/video_bible.mp4";
import {Button} from '@material-ui/core';

function InicioHeadline(){
    return(
        <div className="headline">
             <div className="hero">
             <div className="headline__div">
                <div className="row">
                    <div className="col-sm-6 headline__text">
                        <div className="headline__text__text">
                            <h2 className="headline_title">NEVER STOP</h2>
                            <h3 className="headline_subtitle">Read the bible everyday.</h3>
                            <p className="headline_desc">Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="headline__button">
                            <Button variant="contained" color="primary">Saber mas</Button>
                        </div>                        
                    </div>

                </div>
                {/* <div className="headline__div__text">
                    <h2>NEVER STOP</h2>
                    <h3>Read the bible everyday.</h3>
                    <p>Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button variant="contained" color="primary">Saber mas</Button>
                </div> */}
             </div>

                <video className="video-bg" autoPlay loop muted>
                <source src={VideoBackground} type="video/mp4" />
                </video>
            </div>
            {/* <video className="video" autoPlay loop muted>
            <source src={VideoBackground} type="video/mp4" />
            </video>
            <div className="headline__div">
                <div className="headline__div__text">
                    <h2>NEVER STOP</h2>
                    <h3>Read the bible everyday.</h3>
                    <p>Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button variant="contained" color="primary">Saber mas</Button>
                </div>
            </div> */}
        </div>
    )
}

export default InicioHeadline;