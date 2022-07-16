import React from "react";

const Filter=(props)=>{
    return(
    <div className="filter-wrapper">
        <h2 className="">Filters</h2>
        <div className="filter-rating">
            <h6 className="span-2">Ratings</h6>
            <input type="checkbox" className="filter-input" name="four" value="4" onClick={()=>props.clickHandle(this)}></input>
            <label htmlFor="four" className="filter-label">4 and above</label>

            <input type="checkbox" className="filter-input" name="three" value="3" onClick={()=>props.clickHandle(this)}></input>
            <label htmlFor="three" className="filter-label">between 3 and 4</label>
                
            <input type="checkbox" className="filter-input" name="two" value="2" onClick={()=>props.clickHandle(this)}></input>
            <label htmlFor="two" className="filter-label">between 2 and 3</label>
                
            <input type="checkbox" className="filter-input" name="one" value="1" onClick={()=>props.clickHandle(this)}></input>
            <label htmlFor="one" className="filter-label">between 1 and 2</label>
                
            <input type="checkbox" className="filter-input" name="reset" value="0" onClick={()=>props.clickHandle(this)}></input>
            <label htmlFor="reset" className="filter-label">Clear</label>
        </div>
    </div>
    )
}
export default Filter