import React from "react";
import Product from "../components/Product";

export const Products = ()=>{
    return(
        <section className="products-list">
            <hr/>
            <h1 className="section-header">PRODUKTY</h1>
            <hr/>
            <Product/>
        </section>
    )
}