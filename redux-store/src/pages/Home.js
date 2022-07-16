import React from "react";
import Carousel from "../components/Carousel";
import LandingCards from "../components/LandingCards";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../components/Product";

export const Home = ()=>{
    const isLogged = useSelector((state)=>state.logged)

    return(
        <section className="landing">
            <header className="store-intro">
                <h1>Welcome to Ciao</h1>
                <p className="short">The best online store with headquarter in Rzeszow</p>
            </header>
            <div className="landing-welcome-desktop">
                    <div className="landing-elements-wrapper">
                        <h2 className="headings align-left">CIAO</h2>
                        <p className="sup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <img src={require('../images/landing-cart.jpg')} className="landing-img" alt="" aria-hidden/>
                </div>
            <main className="container">
                <div className="cards">
                    <LandingCards header="You are the only one we are waiting for" title="Favourite list" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </div>
                <div className="categorie">
                    <Carousel/>
                </div>       
                
                <div className="blog-outer-wrapper">
                <h2 className="center grey">Magazine</h2>
                    <div className="blog-inner-wrapper">
                    <Blog img="commingsoon.png" title="Comming soon" description="Lorem ipsum dolor sit amet." time="July 18, 2022 15:01" link="a"/>
                    <Blog img="blog-ideas.jpg" title="New ideas" description="Lorem ipsum dolor sit amet." time="July 10, 2022 15:23" link="a"/>
                    <Blog img="commingsoon.png" title="Comming soon" description="Lorem ipsum dolor sit amet." time="July 30, 2022 22:53" link="a"/>
                    </div>
                </div>
                <div className="landing-products">
                    <h2 className="backdrop center">Check our latest news</h2>
                </div>
                <Product/>
                {!isLogged &&
                <div className="baner">
                    <h3>Sign up to get bonuses!</h3>
                    <Link to="/login">SIGN UP!</Link>
                </div>
                }
            </main>
            <Footer/>
        </section>
    )
}