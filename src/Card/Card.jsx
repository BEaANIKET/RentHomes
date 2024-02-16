import React from "react";
import './card.css'

const Card = (props)=>{
    return(
        <div className="card">
            <img src={props.img} alt="" />
            <p className="name">{props.name}</p>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Card;