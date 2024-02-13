import React from "react";
import './footer.css'
import logo from '../Assets/logo.png'
import Footerlinkcard from "../Footerlinkcard/Footerlinkcard";
import insta from '../Assets/insta.png'
import twitter from '../Assets/twitter.png'
import youtube from '../Assets/youtube.png'
import facebook from '../Assets/facebook.png'

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top1">
                    <div className="footer-top-item1">
                        <img src={logo} alt="" />
                        <p>The best and easiest way to rent homes.</p>
                    </div>
                    <Footerlinkcard heading={'Useful links'} text1={'About us'} text2={'Events'} text3={'Blogs'} text4={'FAQ'} />
                    <Footerlinkcard heading={'Main Menu'} text1={'Home'} text2={'Offers'} text3={'Menus'} text4={'Reservation'} />
                    <Footerlinkcard heading={'Contact Us'} text1={'example@email.com'} text2={'+64 958 248 966'} text3={'Social media'} />
                </div>
                <div className="footer-top2"></div>
                <div className="footer-top3"></div>
                <div className="footer-top4"></div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-top">
                    <div className="footer-bottom-top-link"><img src={facebook} alt="" /></div>
                    <div className="footer-bottom-top-link"><img src={insta} alt="" /></div>
                    <div className="footer-bottom-top-link"><img src={twitter} alt="" /></div>
                    <div className="footer-bottom-top-link"><img src={youtube} alt="" /></div>
                </div>
                <div className="footer-bottom-bottom">Copyright 2023 Dscode | All rights reserved</div>
            </div>
        </div>
    )
}
export default Footer;