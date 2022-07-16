import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";

const ProductPage = ()=>{
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const idOfProductToDetails = location.state
    const fav = useSelector((state)=>state.favs)
    const isLogged = useSelector((state)=> state.logged)

    const likedStyleLike={
        color:"rgb(214, 33, 33)"
    }

    const likedStyleNonLike={
        color:"rgb(253, 173, 173)"
    }


    React.useEffect(()=>{
        const loadData = async ()=>{
            setIsLoading(true)
            const url = `https://fakestoreapi.com/products/${idOfProductToDetails}`
            const response = await fetch(url)
            const result = await response.json()
            setProduct(result)
            setIsLoading(false)
        }
        loadData()
    },[])
    return(
        <section className="details-wrapper">
            {isLoading && <div className="loader-container">
                        <div className="loader big">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>}
            {!isLoading && <div className="details-inner-wrapper">
               <img className="product-image" src={product.image} alt=""/>
                <div className="product-content">
                    <span className="product-title-detail-page">{product.title}</span>
                    <span className="product-price-detail-page">{product.price} EUR</span>
                    <p className="detail-section-header">Ratings</p>
                    <div className="product-ratio-detail-page">
                        <span className="rate">{product.rating?.rate}<i className="fa-solid fa-star" style={{color:"#00adb570"}}></i></span>
                        {isLogged && <span className="rate" onClick={()=>dispatch({type:"FAV",payload:product})}>{product.rating?.count}<i className="fa-solid fa-heart" style={fav.includes(product) ? likedStyleLike : likedStyleNonLike}></i></span>}
                    </div>
                    <p className="detail-section-header">Description</p>
                    <article className="product-description-detail-page">
                        {product?.description}
                    </article>
                    <button className="to-cart" onClick={()=>{
                    dispatch({type:"ADD",payload:product})
                    alert('You have added an item to cart')
                    }}>Add item</button>
                </div>
                <div className="mobile-wrapper">
                    <Carousel/>
                </div>
            </div>}
            <div className="desktop-wrapper">
                    <Carousel/>
            </div>
            <Footer/>
        </section>
    )
    
}

export default ProductPage