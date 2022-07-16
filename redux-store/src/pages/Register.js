import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";


const Login = ()=>{
    const [registered, setRegistered] = React.useState(false)
    const [account,setAccount] = React.useState({})

    const t = useSelector((state)=>state.login)
    
    const createAccount =()=>{
        dispatch({type:'CREATE', payload: account})
        setRegistered(true)
    }
    const dispatch = useDispatch()
    
    return(
        <div>
            <div className="login-panel">
                {!registered && <p>Create new account</p>}
                {!registered && <input type="text" placeholder="Login" onChange={(e)=>setAccount({...account, log: e.target.value})}/>}
                {!registered && <input type="password" placeholder="Password" onChange={(e)=>setAccount({...account, pass: e.target.value})}/>}
                {!registered && <button onClick={createAccount}>Register</button>}
                {registered && <p>Done? Now </p>}
                {registered && <Link to="/login">Login to your account</Link>}
            </div>
            <Footer/>
        </div>
    )
}

export default Login