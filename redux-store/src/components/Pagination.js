import React from "react"

const Pagination = ({postPerPage, totalPosts, paginate})=>{
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul>
                {pageNumbers.map(number =>(
                    <li key={number}>
                        <a href="#" onClick={()=>paginate(number)} className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination