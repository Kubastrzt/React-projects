import React from "react";

const LandingCards = (props)=>{
    return(
        <div className="card">
            <div className="card-header">{props.header}</div>
            <div className="card-wrapper">
                <p className="card-sub_text">{props.description}</p>
                <a href={props.link} className="card-link">More about us <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
    )
}
export default LandingCards