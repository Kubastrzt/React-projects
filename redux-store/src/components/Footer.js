import React from "react";
import {Link} from 'react-router-dom'

const Footer = ()=>{
    return(
        <footer className="footer-container">
            <img src={require('../images/logos/logo_transparent.png')}/>
            <nav className="footer-links">
                    <ul>
                        <li><Link to="/men's%20clothing">Men</Link></li>
                        <li><Link to="/women's%20clothing">Women</Link></li>
                        <li><Link to="/jewelery">Accessories</Link></li>
                        <li><Link to="/electronics">Electronics</Link></li>
                    </ul>
            </nav>
            <nav className="socials">
                <ul>
                    <li><Link to="/"><i className="fa-brands fa-facebook-square"></i></Link></li>
                    <li><Link to="/"><i className="fa-brands fa-instagram-square"></i></Link></li>
                    <li><Link to="/"><i className="fa-brands fa-twitter-square"></i></Link></li>
                </ul>
            </nav>
            <div className="newsletter">
                <h6>JOIN US</h6>
                <p>Join our newsletter and stay updated with news</p>
            </div>
            <p className="copy">All rights reserved &copy;Ciao</p>
        </footer>
    )
}

export default Footer