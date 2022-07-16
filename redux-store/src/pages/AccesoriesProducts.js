import React from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Accessories = ()=>{
    const [switchButton, setSwitchButton] = React.useState(false)
    const [clear, setClear] = React.useState(false)
    const activateFilters =()=>{
        setSwitchButton(prev => !prev)
    }
    const [products, setProducts] = React.useState([])
    const [localFiltered, setLocalFiltered] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    
    const navigate = useNavigate()

    const toDetails = (id)=>{
        navigate(`/product/${id}`, {state:id})
    }

    React.useEffect(()=>{
        const loadData = async ()=>{
            setIsLoading(true)
            const url = "https://fakestoreapi.com/products"
            const response = await fetch(url)
            const result = await response.json()
            setProducts(result)
            setLocalFiltered(result)
            setIsLoading(false)
        }
        loadData()
    },[clear])
    let productAccesories = []
    localFiltered.map((product)=>{
        if(product.category==="jewelery"){
           return productAccesories.push(product)
        }
        else return null
    }) 
    const check = ()=>{
        const input = window.event.target
        if(input.checked){
            const parent = input.parentElement
            for(let i=0;i<parent.children.length;i++){
                if(parent.children[i]!==input){
                    parent.children[i].checked = false
                }
            }
            checkFilters(input.value)
        }
        else{
            setClear(prev=>!prev)
        }
    }
    const checkFilters = (value)=>{
        const newValue = parseInt(value)
        if(newValue>0){
            const limit = newValue+1
            const result = products.filter((data)=>{
                return (data.rating.rate > newValue && data.rating.rate < limit)
            })
            setLocalFiltered(result)
        }
        else{
            setClear(prev=>!prev)
        }
    }
    return(
        <div className="product-section-container">
            <section className="products-outer-wrapper">
            <div className="desktop">
                { switchButton && <Filter clickHandle={check} clear={setClear}/>}
                <button onClick={activateFilters} className="filter-toggler-button">Filters</button>
            </div>
            <div className="mobile">
                <Filter clickHandle={check} clear={setClear}/>
            </div>
                <h2 className="headings desktop">All products</h2>
                    <div className="products-inner-wrapper">
                    {
                        productAccesories.map((product)=>{
                            const fillProgress = Math.ceil((product.rating.rate * 100)/5)
                            const color = Math.ceil((product.rating.rate * 100)/5)
                            const fillColor = Math.ceil((color*255)/100)
                            const rating = {
                                backgroundImage: `linear-gradient(90deg, rgb(${255-fillColor}, ${fillColor}, ${fillColor}) ${fillProgress}%, transparent ${fillProgress}%, transparent ${100-fillProgress}%)`
                            }
                            return(
                            <div className="item" key={product.id} onClick={()=>toDetails(product.id)}>
                                <img src={product.image} alt="" aria-hidden/>
                                <span className="item-title">{product.title}</span>
                                <span className="item-price">{product.price} EUR</span>
                                <div className="rating">
                                    <span className="item-rate">({product.rating.rate})<i className="fa-solid fa-star" style={{color:"#00adb5"}}></i></span>
                                    <span className="item-ratings" style={rating}><i className="fa-solid fa-heart"></i>fame</span>
                                </div>
                            </div>
                            )
                        })
                    }
                    {isLoading && <div className="loader-container">
                        <div className="loader big">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>}
                    </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Accessories