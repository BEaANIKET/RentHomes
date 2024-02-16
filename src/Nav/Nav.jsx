import React, { useState } from "react";
import "./nav.css";
import logo from "../Assets/logo.png";
import menu_icon from "../Assets/menu.png";
import cross_icon from "../Assets/cross.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [page, setPage] = useState("Home");
  const [navPos, setNavPos] = useState("upper");
  const [hamburger, setHamburger] = useState(menu_icon);
  const [background, setBackground] = useState("transpirent");
  const [navheight, setNavheight] = useState("95");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y >= 45) {
      setBackground("white");
      setNavheight("50");
    } else {
      setBackground("transpirent");
      setNavheight("95");
    }
  });

  const toggleMenu = () => {
    setNavPos((prev) => (prev === "upper" ? "" : "upper"));
    setHamburger((prev) => (prev === menu_icon ? cross_icon : menu_icon));
  };


//   const menuItems = ["Home", "About", "Services", "Reviews", "Contect"];

  return (
    <div
      style={{ backgroundColor: `${background}`, height: `${navheight}px` }}
      className="navbar"
    >
      <div className="navbar-items navbar">
        <div className="navlogo">
          <img src={logo} alt="" />
        </div>
        <div className={`navitem ${navPos}`}>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}><li onClick={() => setPage('Home')}> Home {page === 'Home' ? <hr /> : ""} </li> </Link>
          <Link to={"/About"} style={{ textDecoration: "none", color: "black" }}><li onClick={() => setPage('About')}> About {page === 'About' ? <hr /> : ""} </li> </Link>
          <Link to={"/Services"} style={{ textDecoration: "none", color: "black" }}><li onClick={() => setPage('Services')}> Services {page === 'Services' ? <hr /> : ""} </li> </Link>
          <Link to={"/Reviews"} style={{ textDecoration: "none", color: "black" }}><li onClick={() => setPage('Reviews')}> Reviews {page === 'Reviews' ? <hr /> : ""} </li> </Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}><li onClick={() => setPage('Contect')}> Contect {page === 'Contect' ? <hr /> : ""} </li> </Link>
        </div>
        <div onClick={toggleMenu} className="menulogo">
          <img src={hamburger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
