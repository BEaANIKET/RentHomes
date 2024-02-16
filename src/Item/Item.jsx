import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const Item = ({props})=>{
    return (
        <div className=' item'>
            <div className="item-top">
                <img src={props.houseImg} alt="" />
            </div>
            <div className="item-bottom">
                <div className="item-bottom-name">{props.name}</div>
                <div className="item-bottom-prices"><span className='dollor'>$</span><span className='item-bottom-price-price'>{props.price}</span>/months</div>
                <div className="item-bottom-details">
                    <li>
                        3 bedrooms
                    </li>
                    <li>
                        2 bathrooms
                    </li>
                </div>
                <Link className='btnlink' to={`/menupage/${props.id}`}><button onClick={()=>window.scrollTo(0,0)} className='item-bottom-button'>READ MORE</button></Link>
            </div>
        </div>
    )
}

export default Item;