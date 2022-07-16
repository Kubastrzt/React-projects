import React from "react";

const Blog =(props)=>{
    return(
        <section className="blog">
            <div className="blog-wrapper">
                <img className="blog-img" src={require(`../images/${props.img}`)} alt="blog-image" aria-hidden/>
                <div className="blog-info">
                    <h3 className="blog-title">{props.title}</h3>
                    <article className="blog-description">{props.description}</article>
                    <time className="blog-date">{props.time}</time>
                    <a href={props.link} className="blog-link">Read The Story</a>
                </div>
            </div>
        </section>
    )
}

export default Blog