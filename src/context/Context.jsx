import React from 'react';
import { createContext } from 'react';
import allHouseData from '../Assets/allhousedata/allHouseData'

export const allDataContext = createContext(null);

const contextProvider = (props)=>{

    const element = {allHouseData};

    return (
        <allDataContext.Provider value={allHouseData}>
            {props.children}
        </allDataContext.Provider>
    )
}
export default contextProvider;