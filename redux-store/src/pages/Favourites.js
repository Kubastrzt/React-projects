import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";

const Favourites = ()=>{
    const favList = useSelector((state)=>state.favs)
    const dispatch = useDispatch()
    return(
        <section className="favourites">
            <h2 className="backdrop fav-heading">List of favourites products</h2>
            {favList.length === 0 ? <p className="pad fav-empty">There is no product you would like!</p> : <div className="fav-product-list pad">
                {favList.map((item)=>{
                    return(
                        <div className="fav-item" key={item.id}>
                            <img src={item.image} alt="fav item image"></img>
                            <div className="fav-item-data">
                                <h4>{item.title}</h4>
                                <i onClick={()=>dispatch({type:"RFAV",payload:item})} className="fa-solid fa-heart"></i>
                            </div>
                        </div>
                    )
                })}
            </div>}
            <Footer/>
        </section>
    )
}

export default Favourites