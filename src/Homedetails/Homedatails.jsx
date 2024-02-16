import React, { useState } from 'react';
import './homedetails.css'
import { useParams } from 'react-router-dom';
import all_data from '../Assets/allhousedata/allHouseData'

const HomeDetails = ()=>{
    const {homeId} = useParams()
    const product = all_data.filter((homedata)=>(Number(homeId)===Number(homedata.id)));
    console.log(product[0].id);
    console.log(all_data[0].houseImg); 
    const [mainImg,setMainimg] = useState(product[0].houseImg)

    return (
        <div className='homedetails'>
            <div className="homedetails-top">
                <div className="homedetails-top-bigimg">
                    <img src={mainImg} alt="" />
                </div>
                <div className="homedetails-top-smallimg">
                    <div className="homedetails-top-smalldiv">
                        <img onClick={()=>setMainimg(product[0].houseImg)} src={product[0].houseImg} alt="" />
                    </div>
                    <div className="homedetails-top-smalldiv">
                        <img onClick={()=>setMainimg(product[0].kitchenImg)} src={product[0].kitchenImg} alt="" />
                    </div>
                    <div className="homedetails-top-smalldiv">
                        <img onClick={()=>setMainimg(product[0].livingImg)} src={product[0].livingImg} alt="" />
                    </div>
                    <div className="homedetails-top-smalldiv">
                        <img onClick={()=>setMainimg(product[0].bedroomImg)} src={product[0].bedroomImg} alt="" />
                    </div>
                </div>  
                <div className="homedetails-bottom">
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">PRICE</p>
                        <p className="homedetails-bottom-text-about">$350 /MONTHS</p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">description</p>
                        <p className="homedetails-bottom-text-about">{product[0].description}</p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">Facilites</p>
                        <p className="homedetails-bottom-text-about">{product[0].Facilites}</p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">Size</p>
                        <p className="homedetails-bottom-text-about">{product[0].Size} </p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">BedType</p>
                        <p className="homedetails-bottom-text-about">{product[0].BedType} </p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">Categories</p>
                        <p className="homedetails-bottom-text-about">{product[0].Categories} </p>
                    </div>
                    <div className="homedetails-bottom-text">
                        <p className="homedetails-bottom-text-head">location</p>
                        <p className="homedetails-bottom-text-about">{product[0].location} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetails;