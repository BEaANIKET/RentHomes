import React, { useState } from "react";
import './nav.css'
import logo from '../Assets/logo.png'
import menu_icon from '../Assets/menu.png'
import cross_icon from '../Assets/cross.png'

const Nav = () => {
    const [page, setPage] = useState('Home');
    const [navPos, setNavPos] = useState('upper');
    const [hamburger, setHamburger] = useState(menu_icon);
    const [background,setBackground] = useState('transpirent')
    const [navheight,setNavheight] = useState('95')

    window.addEventListener('scroll',()=>{
        const y = window.scrollY;
        if(y>=45){
            setBackground('white');
            setNavheight('50')
        }
        else{
            setBackground('transpirent')
            setNavheight('95')
        }
    })

    const toggleMenu = () => {
        setNavPos(prev => prev === 'upper' ? '' : 'upper');
        setHamburger(prev => prev === menu_icon ? cross_icon : menu_icon);
    };

    const handleItemClick = (item) => {
        setPage(item);
    };

    const menuItems = ['Home', 'About', 'Services', 'Reviews', 'Contect'];

    return (
        <div style={{backgroundColor:`${background}`, height:`${navheight}px`}} className="navbar">
            <div className="navbar-items navbar">
                <div className="navlogo">
                    <img src={logo} alt="" />
                </div>
                <div className={`navitem ${navPos}`}>
                    {menuItems.map(item => (
                        <li key={item} onClick={() => handleItemClick(item)}>
                            {item} {page === item ? <hr /> : ''}
                        </li>
                    ))}
                </div>
                <div onClick={toggleMenu} className="menulogo">
                    <img src={hamburger} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
