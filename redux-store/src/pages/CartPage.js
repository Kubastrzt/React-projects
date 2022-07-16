import React from "react"
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";

const CartPage = ()=>{
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const total = cart.reduce((previousValue, currentValue)=>{
        return previousValue+currentValue.price
    },0)
    return(
        <section className="cart">
            <h2 className="headings pad">Cart</h2>
            <div className="products-in-cart">
                { cart.length === 0 && <h5 className="headings center space">Cart is empty</h5>}
                {cart.map((item)=>{
                    return (
                        <div className="cart-inner-wrapper" key={item.id} id={item.id}>
                            <div className="image-wrapper">
                                <img src={item.image} alt="" aria-hidden />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{item.title}</h3>
                                <span className="product-price">{item.price}EUR</span>
                                <button className="delete" onClick={()=>dispatch({type:"REM", payload: item})}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
           { cart.length>0 && <div className="checkout">
                <p>Total</p>
                <p>{total} EUR</p>
            </div>}
            <Footer/>
        </section>
    )
}
export default CartPage