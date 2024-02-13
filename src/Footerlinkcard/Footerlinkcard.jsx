import React from "react";
import './footerlink.css'

const Footerlinkcard = (props)=>{
    return (
        <div className="footerlink">
            <p className="footer-head">{props.heading}</p>
            <p className="footer-text">{props.text1}</p>
            <p className="footer-text">{props.text2}</p>
            <p className="footer-text">{props.text3}</p>
            <p className="footer-text">{props.text4}</p>
        </div>
    )
}

export default Footerlinkcard;