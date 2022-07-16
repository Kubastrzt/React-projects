import React from "react";
import '../index.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Product = ()=>{
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate() 

    const toDetails = (id)=>{
        navigate(`/product/${id}`,{state:id})
    }

    const dispatch= useDispatch()

    React.useEffect(()=>{
        const getData = async ()=>{
        setIsLoading(true)
        const url = 'https://fakestoreapi.com/products'
        const response = await fetch(url)
        const result = await response.json()
        setProduct(result)
        setIsLoading(false)
    }
    getData()
    },[])

    const slider = document.getElementById('slider')

    const scrollLeft = ()=>{
        slider.scrollLeft-=260
        slider.style.transitionDuration="0.3s"
    }

    const scrollRight = ()=>{
        slider.scrollLeft+=260
        slider.style.transitionDuration="0.3s"
    }
    

    return(
        <div className="carousel-landing-products">
        <i onClick={scrollLeft} className="fa-solid fa-arrow-left"></i>
        <div id="slider" className="product-wrapper snap">
            {isLoading ? <div className="loader-container">
                        <div className="loader small">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>: 
                product.map((item) => {
                    return(
                        <div className="product-inner-wrapper" key={item.id}>
                            <div className="image-wrapper" onClick={()=>toDetails(item.id)}>
                                <img src={item.image} alt="" aria-hidden />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{item.title}</h3>
                                <span className="product-price">${item.price}</span>
                                <button className="to-cart" onClick={()=>dispatch({type:'ADD', payload:item})}>Add to cart</button>
                            </div>
                        </div>
                   )
                })
            }
        </div>
        <i onClick={scrollRight} className="fa-solid fa-arrow-right"></i>
        </div>
       
    )
}

export default Product