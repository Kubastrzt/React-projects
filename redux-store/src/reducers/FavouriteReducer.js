const FavouriteReducer = (favList=[], action)=>{
    if(action.type === 'FAV'){
        let tempfav=favList.filter((item)=>item.id===action.payload.id)
        if(tempfav<1){
            return [...favList, action.payload]
        }
        else return favList
    }
    if(action.type === "RFAV"){
        return favList.filter((item)=>item.id !== action.payload.id)
    }
    return favList
}
export default FavouriteReducer