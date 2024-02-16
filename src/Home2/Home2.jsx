import React from "react";
import './home2.css'
import home_img from '../Assets/home2.jpg'
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="home2">
      <div className="home2-left">
        <img src={home_img} alt="" />
      </div>
      <div className="home2-right">
        <div className="home2-right-top">
            <p>Begin </p>
            <p>your awesome </p>
            <p>journey</p>
        </div>
        <div className="home2-right-bottom">
          <p>
            Looking for the perfect home to rent? Our user-friendly house rental
            website makes your search a breeze. Browse through a diverse range
            of listings, From cozy apartments to spacious family houses.
          </p>
          <p>With detailed descriptions, vivid photos, and handy filters, finding your ideal rental is just a click away. </p>

          <Link style={{textDecoration:'none'}} to={'/menupage'}><button onClick={()=>window.scrollTo(0,0)} >Continue</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home2;
