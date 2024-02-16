import React, { useEffect, useState } from "react";
import './home.css'
import { Link } from "react-router-dom";
import HomeImg2 from '../Assets/homehouse2.jpg'
import HomeImg3 from '../Assets/homehouse3.jpg'
import HomeImg4 from '../Assets/homehouse4.jpg'
import HomeImg5 from '../Assets/homehouse5.jpg'
import HomeImg6 from '../Assets/homehouse6.jpg'
import HomeImg7 from '../Assets/homehouse7.jpg'
import HomeImg8 from '../Assets/homehouse8.jpg'

import '../Nav/nav.css'

const Home =()=>{
    
    const imgArray = [HomeImg2,HomeImg3,HomeImg4,HomeImg5,HomeImg6,HomeImg7,HomeImg8];

    const [imgIndex,setImgIndex] = useState(0)

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
            // console.log(imgIndex);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="home">
            <div className="home-left">
                <div className="home-left-top">
                    <p>Your</p>
                    <p>Rental Journey</p>
                    <p>Begins Here</p>
                </div>
                <div className="home-left-bottom">
                    <p>We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
                    <div className="home-left-bottom-btn">
                        <Link to={'/menupage'} style={{textDecoration:'none'}}><button>Rent Now</button></Link>
                        <button>Rent Your Place</button>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div style={{transform:`translateX(-${imgIndex*100}%)`}}  className='sliderimg'>
                    <img src={HomeImg2} alt="" />
                    <img src={HomeImg3} alt="" />
                    <img src={HomeImg4} alt="" />
                    <img src={HomeImg5} alt="" />
                    <img src={HomeImg6} alt="" />
                    <img src={HomeImg7} alt="" />
                    <img src={HomeImg8} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;