import React from "react";
import {Link} from 'react-router-dom'
import Cat1 from '../images/men.jpg'
import Cat2 from '../images/women.jpg'
import Cat3 from '../images/jewellery.jpg'
import Cat4 from '../images/electronics.jpg'
import More from '../images/more.png'

const Carousel =()=>{
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

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
    
    const icons = [Cat1,Cat3,Cat4,Cat2]
    let i=-1
    const categoryArray = product.map(element => {
        return(
            element.category
        )
    })
    const distinctCategoryArray = [...new Set(categoryArray)]
    return(
        <section className="carousel">
            <h2 className="backdrop">Popular categories</h2>
            <div className="categories-wrapper snap">
                {distinctCategoryArray.map(category =>{
                i++
                const path = `/${category}`
                return(
                    <picture className="category" key={category}>
                        <Link to={path}><img src={icons[i]} alt="category-image"/></Link>
                        <p>{category}</p>
                    </picture>
                    )
                }
                )}
                {!isLoading && <picture className="category">
                        <img src={More} alt="category-image"/>
                        <p>More in future</p>
                </picture>}
                {isLoading && <div className="loader-container">
                        <div className="loader small">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>}
            </div>
        </section>
    )
}

export default Carousel