import React from 'react'

function CarouselButton(props){
    const dataTarget = "#" + props.id;
    return (
        <button type="button" 
        data-bs-target={dataTarget}
        data-bs-slide-to={props.to} 
        className={props.active ? "active" : null} 
        aria-current={props.active ? "true" : null}
        aria-label={props.label}></button>
    )
}

export default CarouselButton
