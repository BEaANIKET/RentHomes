import React from 'react';
import './services.css'
import img1 from '../Assets/services/1.png'
import img2 from '../Assets/services/2.png'
import img3 from '../Assets/services/3.png'
import Card from '../Card/Card';

const Services = ()=>{
    return (
        <div className='services'>
            <div className="services-top">
                <div className="services-top-heading">See Our Services</div>
                <div className="services-top-text">We Make Finding Rentals Easy, Effortless Search, Endless Choices</div>
            </div>
            <div className="services-bottom">
                <Card  img={img1} name={'RESPONSIVE'} text={'Our commitment to being responsive means that your concerns and efficient.'}/>
                <Card  img={img2} name={'GREEN'} text={'Experience the convenience of our responsive platform, ensuring swift communication.'}/>
                <Card  img={img3} name={'SECURITY'} text={'Ensuring swift communication and quick solutions for all your rental needs.'}/>
            </div>
        </div>
    )
}

export default Services;