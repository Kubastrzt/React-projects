const Reducer = (cart=[], action)=>{
    if(action.type === 'ADD'){
        let tempCart=cart.filter((item)=>item.id===action.payload.id)
        if(tempCart<1){
            return [...cart, action.payload]
        } 
        else{
            return cart
        }
    }
    if(action.type === 'REM'){
        return cart.filter((item)=>item.id!==action.payload.id)
    }
    return cart
}
export default Reducer