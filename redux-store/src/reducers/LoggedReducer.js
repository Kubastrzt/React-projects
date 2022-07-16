const LoggedReducer = (isLogged=false, action)=>{
    if(action.type === 'SIGN_UP'){
            return action.payload
        } 
        else{
            return isLogged
        }
}

export default LoggedReducer