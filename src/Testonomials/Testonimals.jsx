import React from "react";
import './testonomials.css'
import Card2 from "../Card2/Card2";
import img1 from '../Assets/testonomials/1.png'
import img2 from '../Assets/testonomials/2.png'
import img3 from '../Assets/testonomials/3.png'

const Testonomials = ()=>{
    return (
        <div className="testonomials">
            <div className="testonomials-top">
                <p className="testonomials-top-head">What Customers Say </p>
                <p className="testonomials-top-head">About Our Services</p>
                <p className="testonomials-top-text">We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
            </div>
            <div className="testonomials-bottom">
                <Card2 img={img1} name={'David Anderson'} text={'“I loved the experience, renting a home was an pleasure. From the communication was seamless and professional”.'} />
                <Card2 img={img2} name={'Alex Mitchell'} text={'“It was an Amazing Experience, the attention to detail, personalized approach made the entire process stress-free”.'} />
                <Card2 img={img3} name={'Ryan Bennett'} text={'“Our experience was so good with renting services exceeded all expectations. Demonstrated a deep understanding”.'} />
            </div>
        </div>
    )
}

export default Testonomials;