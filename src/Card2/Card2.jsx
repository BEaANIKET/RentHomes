import React from "react";
import './Card2.css'

const Card2 = (props)=>{
    return (
        <div className="card2">
            <img src={props.img} alt="" />
            <p className="head">{props.name}</p>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Card2;