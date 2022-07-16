import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import '../index.css'
import Logo from "../images/logos/logo_transparent.png"
import { Error } from "../pages/Error";
import CartPage from "../pages/CartPage";
import { Home } from "../pages/Home";
import { useSelector, useDispatch } from "react-redux";
import eXit from '../images/x-solid-white.png'
import MenProducts from "../pages/MenProducts";
import WomenProducts from "../pages/WomenProducts";
import ElectronicsProducts from "../pages/ElectronicsProducts";
import Accessories from "../pages/AccesoriesProducts";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Favourites from "../pages/Favourites";

function Menu() {
  const cart = useSelector((state)=>state.cart)
  const isLogged = useSelector((state)=>state.logged)
  const account = useSelector((state)=>state.login)
  const [isActive, setIsActive] = React.useState(false)


 const toggleMenu=()=>{
   setIsActive(prev => true)
 }
 const turnOffMenu=()=>{
  setIsActive(prev => false)
}
   const fadeIn={
     transform: "translateX(0)",
     transitionDuration: "0.3s"
   }
   const fadeOut={
     transform: "translateX(-100%)",
     transitionDuration: "0.3s"
   }
  return (
      <Router>
      <nav className="menu">
        <button className="main-menu-hamburger-mobile" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 2H1C0.4 2 0 1.6 0 1C0 0.4 0.4 0 1 0H23C23.6 0 24 0.4 24 1C24 1.6 23.6 2 23 2Z" fill="#3D4D4C"></path>
          <path d="M23 24H1C0.4 24 0 23.6 0 23C0 22.4 0.4 22 1 22H23C23.6 22 24 22.4 24 23C24 23.5 23.6 24 23 24Z" fill="#3D4D4C"></path>
          <path d="M23 13H1C0.4 13 0 12.6 0 12C0 11.4 0.4 11 1 11H23C23.6 11 24 11.4 24 12C24 12.6 23.6 13 23 13Z" fill="#3D4D4C"></path>
          </svg>
        </button>       
        <span className="logo-wrapper"><Link to="/"><img src={Logo} alt="LOGO" aria-hidden className="logo"/></Link><p>Ciao</p></span>
        <div className="main-menu-wrapper" style={isActive ? fadeIn : fadeOut} >
            <ul className="menu-primary">
              <li className="primary-item"><Link to="/login" onClick={turnOffMenu}>{isLogged ? <h3>Hello {account.log}</h3> : <h3>Log in</h3>}</Link><i className="fa-solid fa-arrow-right-to-bracket"></i></li>
              <hr style={{position:"absolute", width: "85%", left:"0", top:"80px"}}/>
              <li className="primary-item"><Link to="/men's%20clothing" onClick={turnOffMenu}>Men</Link></li>
              <li className="primary-item"><Link to="/women's%20clothing" onClick={turnOffMenu}>Women</Link></li>
              <li className="primary-item"><Link to="/electronics" onClick={turnOffMenu}>Electronics</Link></li>
              <li className="primary-item"><Link to="/jewelery" onClick={turnOffMenu}>Accessories</Link></li>
            </ul>
            <div className="overlay" onClick={turnOffMenu}>
             <button className="main-menu-hamburger-mobile-close">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4 12L23.7 1.7C24.1 1.3 24.1 0.7 23.7 0.3C23.3 -0.1 22.7 -0.1 22.3 0.3L12 10.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L10.6 12L0.3 22.3C-0.1 22.7 -0.1 23.3 0.3 23.7C0.5 23.9 0.7 24 1 24C1.3 24 1.5 23.9 1.7 23.7L12 13.4L22.3 23.7C22.5 23.9 22.8 24 23 24C23.2 24 23.5 23.9 23.7 23.7C24.1 23.3 24.1 22.7 23.7 22.3L13.4 12Z" fill="white"></path>
              </svg>
             </button>
            </div>
        </div>
        <div className="main-menu-wrapper-desktop">
          <div className="login-wrapper-desktop">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          </div>
            <ul className="menu-primary-desktop">
              <li className="primary-item-desktop"><Link to="/men's%20clothing" onClick={turnOffMenu}>Men</Link></li>
              <li className="primary-item-desktop"><Link to="/women's%20clothing" onClick={turnOffMenu}>Women</Link></li>
              <li className="primary-item-desktop"><Link to="/electronics" onClick={turnOffMenu}>Electronics</Link></li>
              <li className="primary-item-desktop"><Link to="/jewelery" onClick={turnOffMenu}>Accessories</Link></li>
            </ul>
            <div className="menu-services-desktop">
            {isLogged && <Link to={`/${account.log}/favourites`} onClick={turnOffMenu}>Favourites</Link>}
            <Link to="/login" onClick={turnOffMenu}>{isLogged ? <p>Hello {account.log}</p> : <p>Login</p>}</Link>
            <Link to="/cart">Cart(<span className="cart-items">{cart.length}</span>)</Link>
        </div>
        </div>
        <div className="menu-services">
        {isLogged && <Link to={`/${account.log}/favourites`} onClick={turnOffMenu}><i className="fa-regular fa-heart color"></i></Link>}
          <Link to="/cart"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.8 8.40001C22.8 7.10001 21.7 6.00001 20.4 6.00001H18V5.00001C18 2.30001 15.8 0.200012 13.2 0.200012H11C8.3 0.200012 6.2 2.40001 6.2 5.00001V6.00001H3.6C2.3 5.90001 1.2 7.00001 1.2 8.30001L0.200001 21.5C0.200001 22.8 1.3 23.9 2.6 23.9H21.3C22.6 23.9 23.7 22.8 23.7 21.4L22.8 8.40001ZM8.1 4.90001C8.1 3.30001 9.4 2.10001 10.9 2.10001H13.1C14.7 2.10001 15.9 3.40001 15.9 4.90001V5.90001H8.1V4.90001ZM2.6 21.9H21.4C21.6 21.9 21.8 21.7 21.6 21.4L20.6 8.40001C20.6 8.10001 20.4 7.90001 20.2 7.90001H17.8V10.6C17.8 11.2 17.4 11.6 16.8 11.6C16.2 11.6 15.8 11.2 15.8 10.6V7.90001H8V10.6C8 11.2 7.6 11.6 7 11.6C6.4 11.6 6 11.2 6 10.6V7.90001H3.6C3.4 7.90001 3.2 8.10001 3.2 8.30001L2.2 21.5C2.2 21.7 2.4 21.9 2.6 21.9Z" fill="#3D4D4C"></path>
          </svg><span className="cart-items">{cart.length}</span></Link>
          </div>
      </nav>
      <Routes>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/men's%20clothing" element={<MenProducts/>}/>
        <Route path="/women's%20clothing" element={<WomenProducts/>}/>
        <Route path='/electronics' element={<ElectronicsProducts/>}/>
        <Route path='/jewelery' element={<Accessories/>}/>
        <Route path='/product/:productID' element={<ProductPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/:user/favourites' element={<Favourites/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </Router>
  );
}

export default Menu;
