const LoginReducer = (acc={}, action)=>{
    if(action.type === 'CREATE'){
            return action.payload
        } 
        else{
            return acc
        }
}

export default LoginReducer