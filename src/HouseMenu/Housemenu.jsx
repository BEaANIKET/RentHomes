import React, { useContext } from 'react';
import allData from '../Assets/allhousedata/allHouseData'
import Item from '../Item/Item';
import './housemenu.css'

const HouseMenuPage = ()=>{

    // const {allHouseData} = useContext(allDataContext);

    return (
        <div className="housemenupage">
            <div className="housemenupage-top">
                <p className='housemenupage-smallHead'>SELECTED BY OUR AGENTS</p>
                <p className='housemenupage-bighead'>Featured Properties</p>
                <p className="housemenupage-about">Aparto has more than 100 elegantly furnished and air-conditioned properties that are sure to fit your lifestyle and personal needs. Here are some of them.</p>
            </div>
            <div className="housemenupage-bottom">
                {allData.map((data)=>(
                    <Item props={data}/>
                ))}
            </div>

        </div>
    )
}
export default HouseMenuPage;